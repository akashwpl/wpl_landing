import { Info, XCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';

import { BASE_URL } from '../utils/helper';


import { createReactEditorJS } from "react-editor-js";
import parse from 'html-react-parser';

// import { EDITOR_JS_TOOLS } from "./constants";


import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}

const AdminPanel = () => {
    const ReactEditorJS = createReactEditorJS();
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
        console.log('selectedFile', selectedFile);
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

            console.log('uploaded CSV response', response);
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputfile = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const cancelUpload = () => {
        setSelectedFile(null);
    }

    useEffect(() => {
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
        getFaqsHome();
        getFaqsLearnMore();
    }, [])


    const handleFAQupdate = async (data) => {
        console.log('data', data)
        setShowUpdateModal(true)
        setSelectedFAQ(data)

        setUpdateFAQTitle(data.title)
        setUpdateFAQContent(data.content)
    }

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false)
    }

    const handleSave = React.useCallback(async (type) => {
        const savedData = await editorCore.current.save();
        await handleUpdateFaq(savedData?.blocks?.at(0)?.data?.text || updateFAQContent)
    }, [updateFAQTitle, updateFAQContentm, selectedFAQ])

    const handleInitialize = React.useCallback((instance) => {
        editorCore.current = instance
    }, [])


    const handleUpdateFaq = async (content) => {
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
            const data = await resposne.json();
            console.log('updated faq', data?.data)
        } catch (error) {
            console.log('error updating faq', error)
        }
    }

    const convertStringToJSX = (str) => {
        return parse(str);
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
                        <div key={idx} className='flex items-center mb-4 gap-2' onClick={() => {handleFAQupdate(item)}}>
                            <div className='size-2 rounded-full bg-white'/>
                            <div>
                                <p className='text-white text-sm'>{item?.title}</p> 
                                <p className='text-primary text-[12px] text-ellipsis text-wrap'>{convertStringToJSX(item.content)}</p> 
                            </div>
                        </div>
                    ))}
                </div>

                <div className='my-6 h-[1px] w-[800px] bg-white/10'/>

                <div>
                    <div className='text-white text-xl font-semibold mb-4'>Update FAQ's in Learn More page:</div>
                    {faqLearnMore.map((item, idx) => (
                        <div key={idx} className='flex items-center mb-4 gap-2' onClick={() => {handleFAQupdate(item)}}>
                            <div className='min-w-2 min-h-2 rounded-full bg-white'/>
                            <div>
                                <p className='text-white text-sm'>{item?.title}</p> 
                                <p className='text-primary text-[12px] text-ellipsis text-wrap'>{convertStringToJSX(item.content)}</p> 
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
                    <input type='text' onChange={(e) => setUpdateFAQTitle(e.target.value)} value={updateFAQTitle} placeholder={selectedFAQ?.title} className='w-full px-2 py-1 rounded-md bg-black/10'/>
                </div>
                <div className='mt-4'>

                    <ReactEditorJS 
                        onInitialize={handleInitialize}
                        tools={EDITOR_JS_TOOLS} 
                        defaultValue={{blocks: [{id: "1", type: "paragraph", data: {text: updateFAQContent}}]}}
                        value={{blocks: [{id: "1", type: "paragraph", data: {text: updateFAQContent}}]}} 
                        placeholder={updateFAQContent}
                    />
                    {/* <textarea placeholder='Content' onChange={(e) => setUpdateFAQContent(e.target.value)} value={selectedFAQ?.content} className='w-full h-[200px] px-2 py-1 rounded-md bg-black/10'/> */}
                </div>
                <div className='mt-4 flex items-center gap-2'>
                    <button onClick={() => handleSave(type)} className='bg-primary px-4 py-1 rounded-md text-black font-semibold'>Update</button>
                    <button className='bg-primary px-4 py-1 rounded-md text-black font-semibold'>Cancel</button>
                </div>
            </div>
      </Modal>
    </div>
  )
}

export default AdminPanel