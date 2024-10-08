import { useMemo } from "react";

const LeaderboardTable = ({data, pos}) => {

  const headerColumns = Object?.keys(data[0]);

  const columnWidths = useMemo(() => {
    const widths = {};
    headerColumns.forEach((key, index) => {
      if (index === 0) {
        widths[key] = 'w-[15px] md:w-[50px] lg:w-[80px]';
      } else if (index === 1) {
        widths[key] = 'w-[40px] md:w-[170px] lg:w-[190px]';
      } else if (index === 2) {
        widths[key] = 'w-[25px] md:w-[100px] lg:w-[125px]';
      } else if (index === 3) {
        widths[key] = 'w-[20px] md:w-[100px] lg:w-[125px]';
      } else {
        widths[key] = 'w-[40px] md:w-[150px] lg:w-[150px]';
      }
    });
    return widths;
  }, [headerColumns]);
  
  return (
    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className={`flex items-center ${pos ? pos : 'justify-center'}`}>
      <table className="lg:w-[1187px] w-full min-w-[410px] h-[259px] bg-[#0F1971] text-white leading-[24px] table-fixed">
        <thead>
          <tr className='bg-[#0F1C79] text-[#CCCCF8]'>
            {headerColumns.map((key, index) => (
              <th key={index} className={`py-3 leading-[12px] md:px-6 px-1 md:text-[12px] text-[8px] font-normal border-t border-l border-table_border_blue ${columnWidths[key]} min-w-[60px]`}>
                {index === 0 ? (
                  <>
                    <span className="hidden md:inline">{key}</span>
                    <span className="md:hidden">#</span>
                  </>
                ) : key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='border border-table_border_blue w-full'>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-center text-[10px] md:text-[14px] font-medium border-t border-table_border_blue">
              {headerColumns.map((key, cellIndex) => (
                <td key={cellIndex} className={`h-[56px] border-l border-table_border_blue font-inter ${columnWidths[key]} min-w-[60px] overflow-hidden text-ellipsis whitespace-nowrap`}>
                  {cellIndex === 0 ? `#${row[key]}` : row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
