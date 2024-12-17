import { ChevronRight, ChevronLeft } from 'lucide-react';

import { Clock4 } from 'lucide-react';
import Link from '../assets/link'

function InvoiceHeader() {
  return (
    <div className='border p-4 rounded-t-[6px] md:border-none md:p-0 '>
        <div className='md:flex pb-6 mt-[-14px] items-center gap-2 hidden '>
        <p className='text-[#667085] font-medium'>Home</p>
      <ChevronRight className='w-4 h-4 text-[#98A2B3]' />
      <p className='text-[#667085] font-medium'>Invoice</p>
      <ChevronRight className='w-4 h-54 text-[#98A2B3]' />
      <p className='font-medium'>View invoice</p>
        </div>

        <h2 className='text-[20px] font-semibold mb-[56px] hidden md:flex'>View Invoice</h2>

        <div className='flex justify-between items-center md:mb-[52px]'>
            <div className='flex items-center '>
            <ChevronLeft className='w-5 h-5 hidden md:flex mr-2'  />
            <h2 className='text-[20px] font-semibold  text-[#212121] hidden md:flex'>INV-001</h2>
            <h2 className='text-[18px] font-semibold  text-[#212121] md:hidden'>INVOICE</h2>
            </div>

            <div className='flex gap-4 items-center'>
                <p className='bg-[#FEF3F2] text-[#D92D20] py-2 px-4 text-[14px] md:text-[16px] rounded-[4px]'>Overdue</p>

                <div className='border border-[#EAECF0] p-2 md:p-2'>
                    <Clock4 className='w-[13.3px] h-[13.39px] md:w-[18.29px] md:h-[18.29px]' />
                </div>
            </div>
        </div>
        <div>
        <p className='font-medium md:hidden '>INV-001</p>
        <p className='flex md:hidden items-center justify-end text-[#044E97] text-sm'><Link/> Copy payment link</p>
        </div>
    </div>
  )
}

export default InvoiceHeader
