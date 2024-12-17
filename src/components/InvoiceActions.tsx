import Record from '../assets/record';
import Share from '../assets/share';
import Printer from '../assets/printer';
import Download from '../assets/download';

const InvoiceActions = () => {
  return (
    <div className="">
    {/* Record Payment */}
<div className="md:flex space-x-4 justify-end py-[64px] hidden">
  {/* Record Payment */}
  <button className="flex items-center border border-[#044E97] text-[#044E97] px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#044E97] hover:text-white hover:scale-105">
  <Record className="mr-2" /> {/* SVG inherits parent text color */}
  Record payment
</button>


<button className="flex items-center border border-[#044E97] text-[#044E97] px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#044E97] hover:text-white hover:scale-105">
  <Share className="mr-2" /> {/* SVG inherits text color */}
  Send reminder
</button>


<button className="flex items-center border border-[#044E97] text-[#044E97] px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#044E97] hover:text-white hover:scale-105">
  <Printer className="mr-2" /> {/* SVG inherits the hover text color */}
  Print
</button>

<button className="flex items-center border border-[#044E97] text-[#044E97] px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#044E97] hover:text-white hover:scale-105">
  <Download className="mr-2" />
  Download
</button>


  {/* Cancel */}
  <button className="flex items-center border border-red-600 text-red-600 px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:scale-105">
    Cancel
  </button>
</div>

      

    <div className="md:hidden flex justify-around items-center mt-6">
  {/* Record Payment */}
  <div className="flex flex-col items-center gap-2">
    <div className="bg-[#F9FAFB] rounded-full p-4 shadow-md">
      {/* Replace this with your icon */}
     <Record/>
    </div>
    <p className="text-[#0D3C6D] font-medium text-sm">Record payment</p>
  </div>

  {/* Reminder */}
  <div className="flex flex-col items-center gap-2">
    <div className="bg-[#F9FAFB] rounded-full p-4 shadow-md">
      {/* Replace this with your icon */}
      <Share />
    </div>
    <p className="text-[#0D3C6D] font-medium text-sm">Reminder</p>
  </div>

  {/* Download */}
  <div className="flex flex-col items-center gap-2">
    <div className="bg-[#F9FAFB] rounded-full p-4 shadow-md">
      {/* Replace this with your icon */}
      <Download />
    </div>
    <p className="text-[#0D3C6D] font-medium text-sm">Download</p>
  </div>
</div>

    </div>
  );
};

export default InvoiceActions;
