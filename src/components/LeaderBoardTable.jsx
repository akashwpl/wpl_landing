import { useMemo } from "react";

const LeaderboardTable = ({data, pos, fromTier = false}) => {

  console.log('data', data);
  
  // const headerColumns = Object?.keys(data[0]);
  
  const headerColumns2 = [
    "Rank",
    'Name',
    'Tier',
    'Points',
  ]


    const widths = {
      'Rank': 'w-[40px] md:w-[50px] lg:w-[80px]',
      'Name': 'w-[15px] md:w-[50px] lg:w-[140px]',
      'Tier': 'w-[40px] md:w-[150px] lg:w-[150px]',
      'Points': 'w-[20px] md:w-[100px] lg:w-[125px]',
    };
  
  // return (
  //   <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className={`flex items-center ${pos ? pos : 'justify-center'}`}>
  //     <table className="lg:w-[1187px] w-full min-w-[410px] h-[259px] bg-[#0F1971] text-white leading-[24px] table-fixed">
  //       <thead>
  //         <tr className='bg-[#0F1C79] text-[#CCCCF8]'>
  //           {headerColumns.map((key, index) => (
  //             <th key={index} className={`py-3 leading-[12px] md:px-6 px-1 md:text-[12px] text-[8px] font-normal border-t border-l border-table_border_blue ${columnWidths[key]} min-w-[60px]`}>
  //               {index === 0 ? (
  //                 <>
  //                   <span className="hidden md:inline">{key}</span>
  //                   <span className="md:hidden">#</span>
  //                 </>
  //               ) : key}
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody className='border border-table_border_blue w-full'>
  //         {data?.map((row, rowIndex) => (
  //           <tr key={rowIndex} className="text-center text-[10px] md:text-[14px] font-medium border-t border-table_border_blue">
  //             {headerColumns.map((key, cellIndex) => (
  //               <td key={cellIndex} className={`h-[56px] border-l border-table_border_blue font-inter ${columnWidths[key]} min-w-[60px] overflow-hidden text-ellipsis whitespace-nowrap`}>
  //                 {cellIndex === 0 ? `#${row[key]}` : row[key]}
  //               </td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );

    return (
      <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className={`flex items-center ${pos ? pos : 'justify-center'}`}>
        <table className="lg:w-[1187px] w-full min-w-[410px] h-[259px] bg-[#0F1971] text-white leading-[24px] table-fixed rounded-md">
          <thead className="rounded-md">
            <tr className='bg-[#0F1C79] text-[#CCCCF8] rounded-md'>
              {headerColumns2.map((key, index) => {
                return fromTier && key == "Points" ? null :
                <th key={key} className={`py-3 leading-[12px] md:px-6 px-1 md:text-[12px] text-[8px] font-normal ${widths[key]} min-w-[60px]`}>
                  {index === 0 ? (
                    <>
                      <span className="hidden md:inline">{key}</span>
                      <span className="md:hidden">#</span>
                    </>
                  ) : key}
                </th>
              })}
            </tr>
          </thead>
          <tbody className='w-full rounded-md'>
            {data?.map((row, rowIndex) => (
              <tr key={row._id} onClick={() => window.open(`https://app.thewpl.xyz/profile/${row.discordIdentifier}`, "_blank")} className="text-center text-[10px] md:text-[14px] font-medium border-t border-table_border_blue cursor-pointer hover:bg-white/10">
                  <td key={row.wplId} className={`h-[56px] border-l border-table_border_blue font-inter min-w-[60px] w-[40px] md:w-[170px] lg:w-[130px] overflow-hidden text-ellipsis whitespace-nowrap`}>
                    {row.rank}
                  </td>
                  {!row.discordIdentifier ? null : 
                    <td key={row.discordIdentifier} className={`h-[56px] border-l border-table_border_blue font-inter min-w-[60px] w-[15px] md:w-[50px] lg:w-[140px] overflow-hidden text-ellipsis whitespace-nowrap`}>
                      {/* {cellIndex === 0 ? `#${row[key]}` : row[key]} */}
                      {row.discordIdentifier}
                    </td>
                  } 
                  <td key={row.newTier} className={`h-[56px] border-l border-table_border_blue font-inter min-w-[60px] w-[40px] md:w-[150px] lg:w-[150px] overflow-hidden text-ellipsis whitespace-nowrap`}>
                    {row.newTier == "" ? row?.tier : row.newTier}
                  </td>
                  <td key={row.cumulativeLeaderboard} className={`h-[56px] border-l border-table_border_blue font-inter min-w-[60px] w-[20px] md:w-[100px] lg:w-[125px] overflow-hidden text-ellipsis whitespace-nowrap`}>
                    {row.cumulativeLeaderboard}
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default LeaderboardTable;
