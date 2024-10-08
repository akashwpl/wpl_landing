import React, { useEffect, useRef, useState } from 'react'
import LeaderboardTable from '../components/LeaderBoardTable'

import btnPng from '../assets/subtract_png/leaderboard_btn.png'
import leftArrowSvg from '../assets/svg/left-arrow.svg'
import rightArrowSvg from '../assets/svg/right-arrow.svg'

import axios from 'axios'
import DisableZoom from '../hooks/usePreventZoom'

import Papa from 'papaparse'
import { BASE_URL } from '../utils/helper'


const LeaderBoardPage = () => {

  const tableRef = useRef(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  const [tableHeight, setTableHeight] = useState(0);

  const [selectedFile, setSelectedFile] = useState(null);


  const API_URI = import.meta.env.VITE_SPREADSHEET_API_URL_NEW
  const token = import.meta.env.VITE_TOKEN
  const headers = { 'Authorization': `Bearer ${token}`}

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const getData = async () => {
      try {
        const response = (await axios({
          method: 'GET',
          url: API_URI,
          // url: `${BASE_URL}/leaderboard`,
          // headers: headers
        }))
  
        console.log('response learnadad', response);

        // Sheet db API
        setData(response?.data);

        // Mongo DB API
        // setData(response?.data?.data);
        setIsLoading(false);
      } catch (error) {
        console.log('error fetching leaderboard', error);
      }
      
    }

    getData();
  }, []);




  useEffect(() => {
    if(tableRef?.current) {
      setTableHeight(tableRef.current.offsetHeight);
    }
  }, [tableRef?.current, tableRef?.current?.offsetHeight]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }



  return (
    <>
      <DisableZoom />
      <div className='pt-40 flex justify-center items-center mb-56 min-h-screen'>

        <div className='flex flex-col justify-center items-center'>
          <div className='text-[36px] md:text-[48px] leading-[45.6px] font-bienvenue text-[#FAF1B1] uppercase mb-10'>WPL LEADERBOARD</div>
          <div className=''>
            <div ref={tableRef} className={`min-h-[544px] bg-[#0F1970] border border-table_border_blue`} style={{minHeight: tableHeight + "px"}}>
              {isLoading ? <div className='min-h-[544px] w-full lg:min-w-[1185px] flex justify-center items-center'>
                <div className='flex space-x-2 justify-center items-center size-full'>
                  <div className='h-4 w-4 bg-[#FAF1B1] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                  <div className='h-4 w-4 bg-[#FAF1B1] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                  <div className='h-4 w-4 bg-[#FAF1B1] rounded-full animate-bounce'></div>
                </div>
              </div> :
                <LeaderboardTable data={currentItems}/>
              }
            </div>
            {<div className='flex items-center justify-between w-full px-6 mb-10 mt-4'>
              <div className="text-white font-gridular text-[14px] uppercase">
                {Math.min(indexOfLastItem, data.length)} of {data.length} members
              </div>

              <div className="flex items-center gap-2 md:gap-6">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className='relative'>
                  <img src={btnPng} alt='' className='w-[34px] h-[23px]'/>
                  <img src={rightArrowSvg} alt='' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] w-4 h-4'/>
                </button>
                <div className='flex gap-4 text-white text-[12px] font-gridular'>
                  {pageNumbers.map((number) => {
                    if (number === 1 || number === pageNumbers.length || (number >= currentPage - 1 && number <= currentPage + 1)) {
                      return (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={currentPage === number ? 'bg-[#293BBC] w-[20px] h-[18px]' : ''}
                        >
                          {number}
                        </button>
                      );
                    } else if (number === currentPage - 2 || number === currentPage + 2) {
                      return <span key={number}>...</span>;
                    }
                    return null;
                  })}
                </div>
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length} className='relative'>
                  <img src={btnPng} alt='' className='w-[34px] h-[23px]'/>
                  <img src={leftArrowSvg} alt='' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] w-4 h-4'/>
                </button>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default LeaderBoardPage
