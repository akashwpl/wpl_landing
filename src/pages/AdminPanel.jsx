import { Info, XCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';

import { BASE_URL } from '../utils/helper';

import parse from 'html-react-parser';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminPanel = () => {
    Modal.setAppElement('#root');

    const editorCore = React.useRef(null)

    const [selectedFile, setSelectedFile] = useState();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState({});
    const [updateFAQTitle, setUpdateFAQTitle] = useState('');
    const [updateFAQContent, setUpdateFAQContent] = useState('');

    const [faqHome, setFaqHome] = useState([]);
    const [faqLearnMore, setFaqLearnMore] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const login = async () => {
        try {
            const response = await fetch(`${BASE_URL}/account/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await response.json();
            if(data?.data?.token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            localStorage.setItem('token_wpl', data?.data?.token);
            
        } catch (error) {
            console.log('err login admin', error);
        }

    }

    const uploadFile = async (e) => {
        if(selectedFile === null) {
            alert('Please select a file to upload');
            return;
        }
        const formData = new FormData();
        formData.append('leaderboardCSVFile', selectedFile);

        try {
            const response = await fetch(`${BASE_URL}/leaderboard/csv/flushAndAdd`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token_wpl')}`,
                },
                body: formData
            });
            if(response.status === 401) {
                alert('Unauthorized');
                return;
            }
            if(response.status === 201) {
                alert('File uploaded successfully');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSelectedFile(null);
        }
    }

    const handleInputfile = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const cancelUpload = () => {
        setSelectedFile(null);
    }

    const getFaqsHome = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/faq/home`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const faq = await response.json();
            setFaqHome(faq?.data);
        } catch (error) {
            console.log('error fetching faq', error);
        } finally{
            setIsLoading(false);
        }
    }
    const getFaqsLearnMore = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/faq/learn_more`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const faq = await response.json();
            setFaqLearnMore(faq?.data);
        } catch (error) {
            console.log('error fetching faq', error);
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getFaqsHome();
        getFaqsLearnMore();
    }, [])


    const handleFAQupdate = async (data) => {
        setShowUpdateModal(true)
        setSelectedFAQ(data)

        setUpdateFAQTitle(data.title)
        setUpdateFAQContent(data.content)
    }

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false)
        setSelectedFAQ({})
        setUpdateFAQTitle('')
        setUpdateFAQContent('')
    }

    const handleSave = React.useCallback(async (type) => {
        await handleUpdateFaq(updateFAQContent)
    }, [updateFAQTitle, updateFAQContent, selectedFAQ])

    const handleInitialize = React.useCallback((instance) => {
        editorCore.current = instance
    }, [])


    const handleUpdateFaq = async (content) => {
        if(content.length === 0) {
            alert('Content cannot be empty');
            return;
        }
        if(updateFAQTitle.length === 0) {
            alert('Title cannot be empty');
            return;
        }
        try {
            const resposne = await fetch(`${BASE_URL}/faq/update/${selectedFAQ?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token_wpl')}`
                },
                body: JSON.stringify({
                    title: updateFAQTitle,
                    content: content,
                    type: selectedFAQ?.type
                })
            })
        } catch (error) {
            console.log('error updating faq', error)
            alert('Error updating FAQ');
        } finally {
            handleCloseUpdateModal();
            selectedFAQ?.type === 'home' ? getFaqsHome() : getFaqsLearnMore();
        }
    }

    const convertStringToJSX = (str) => {
        const modifiedString = str.replace(/<a /g, '<a target="_blank" class="text-primary" ');
        return parse(modifiedString);
    }

  return (
    <div className='min-h-screen flex justify-center'>
        <div className='pt-40 max-w-[1200px] flex flex-col justify-start items-start'>

            {!isLoggedIn &&
                <div>
                    <div className='text-primary text-lg font-semibold'>Admin Login</div>
                    <div>
                        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='px-2 py-1 w-[300px] rounded-md'/>
                    </div>
                    <div className='mt-3'>
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='px-2 py-1 w-[300px] rounded-md'/>
                    </div>
                    <div className='mt-4'>
                        <button onClick={login} className='bg-primary px-4 py-1 rounded-md text-black font-semibold'>Login</button>
                    </div>
                </div>
            }

            {isLoggedIn && <div className='w-full'>
                <div>
                    <div className='text-white'>Logged in user: <span className='text-primary font-semibold'>{email}</span></div>
                </div>

                <div className='text-white text-3xl font-semi-bold mt-4'>Leaderboard:</div>
                <div className='mt-1'>
                    <div className='text-white flex items-center gap-2'>Selected File: <span className='text-primary font-semibold max-w-[300px] text-wrap'>{selectedFile?.name}</span>
                        {selectedFile && <button onClick={cancelUpload} className='rounded-md font-semibold ml-2'>
                                <XCircle size={20} className='hover:stroke-rose-500'/>
                            </button>
                        }
                    </div>
                    <p className='text-white/40 text-[10px] flex items-center gap-1'><Info size={12}/> Select a CSV file to upload</p>

                    {!selectedFile && 
                        <div className='mt-4'>
                            <input type='file' onChange={handleInputfile} className='text-primary font-semibold'/>
                        </div>
                    }
                    {selectedFile &&
                        <div className='mt-4 flex items-center gap-2'>
                            <button onClick={uploadFile} className='bg-primary px-4 py-1 rounded-md font-semibold'>Upload</button>
                        </div>
                    }
                </div>

                <div className='my-6 h-[1px] w-[800px] bg-white/10'/>

                <div>
                    <div className='text-white text-xl font-semibold mb-4'>Update FAQ's in HOME page:</div>
                    {faqHome.map((item, idx) => (
                        <div key={idx} className='flex items-center mb-4 gap-2 cursor-pointer' onClick={() => {handleFAQupdate(item)}}>
                            <div className='min-w-2 min-h-2 rounded-full bg-white'/>
                            <div>
                                <p className='text-white text-sm'>{item?.title}</p> 
                                <p className='text-white/60 text-[12px] text-ellipsis text-wrap'>{convertStringToJSX(item.content)}</p> 
                            </div>
                        </div>
                    ))}
                </div>

                <div className='my-6 h-[1px] w-[800px] bg-white/10'/>

                <div>
                    <div className='text-white text-xl font-semibold mb-4'>Update FAQ's in Learn More page:</div>
                    {faqLearnMore.map((item, idx) => (
                        <div key={idx} className='flex items-center mb-4 gap-2 cursor-pointer' onClick={() => {handleFAQupdate(item)}}>
                            <div className='min-w-2 min-h-2 rounded-full bg-white'/>
                            <div>
                                <p className='text-white text-sm'>{item?.title}</p> 
                                <p className='text-white/60 text-[12px] text-ellipsis text-wrap'>{convertStringToJSX(item.content)}</p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>

        <Modal
            isOpen={showUpdateModal}
            onRequestClose={handleCloseUpdateModal}
            style={{
                overlay: {
                    backgroundColor: `rgba(0, 0, 0, 0.5})`,
                    backdropFilter: `blur(${1}px)`,
                    zIndex: 102
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    background: 'none',
                    overflow: 'visible',
                    padding: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    width: '100%',
                    height: 'fit-content',
                }
            }}
        >
            <div className='bg-white md:min-w-[800px] md:max-w-[1200px] px-4 py-2 rounded-md'>
                <div className='text-black text-xl font-semibold mb-2'>Update FAQ</div>
                <div>
                    <div className='text-black/60 text-sm'>Title:</div>
                    <input type='text' onChange={(e) => setUpdateFAQTitle(e.target.value)} value={updateFAQTitle} placeholder={selectedFAQ?.title} className='w-full px-2 py-1 rounded-md bg-black/5 outline-none border-none'/>
                </div>
                <div className='mt-4'>
                    <div className='text-black/60 text-sm'>Content:</div>
                    <ReactQuill 
                        tools={EDITOR_JS_TOOLS} 
                        value={updateFAQContent}
                        onChange={setUpdateFAQContent}
                        placeholder={updateFAQContent}
                    />
                </div>
                <div className='mt-4 flex items-center gap-2'>
                    <button onClick={() => handleSave()} className='bg-primary px-4 py-1 rounded-md text-black font-semibold'>Update</button>
                    <button onClick={handleCloseUpdateModal} className='bg-primary px-4 py-1 rounded-md text-black font-semibold'>Cancel</button>
                </div>
            </div>
      </Modal>
    </div>
  )
}

export default AdminPanel