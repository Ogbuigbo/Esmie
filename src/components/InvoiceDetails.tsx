// components/InvoiceDetails.tsx
import { useData } from "../context/DataContext";

const InvoiceDetails = () => {
  // Use context to access the data
  const { invoiceData } = useData();
  const {
    currency,
    issueDate,
    invoiceNumber,
    balanceDue,
    customer,
    inventories,
    bankAccounts,
  } = invoiceData;

  return (
    <div className="bg-white md:p-6 md:pt-[64px] border md:rounded-3xl">
      {/* Header Section */}
      <div className="flex justify-between items-start border-b px-4 py-2 md:px-0 md:py-0 md:border-none">
        <div className="flex flex-col gqp-3">
          <img src='https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734212690/Esemie_Logo_1_szief3.png' alt="esemie logo"  className="w-[120px] h-[33.3px] hidden md:flex" />
          <p className="text-gray-600 text-sm md:text-[18px] md:my-4 font-semibold">Epsilon</p>
          <p className="text-gray-600 text-sm md:text-[18px]">3, Ogusanya Drive, Surulere, <span className="block md:inline-block">Lagos</span></p>
          <p className="text-gray-600 text-sm md:text-[18px]">07058857363</p>
        </div>
        <div>
          <p className="text-[30px] font-semibold text-right hidden md:flex">INVOICE</p>
          <p className="text-xl font-semibold text-right md:ml-[40px] mt-[24px] hidden md:flex ">{invoiceNumber}</p>
          <p className="text-[#667085] text-left md:text-xl md:font-semibold font-medium mt-[16px] md:mt-[0] text-sm">Balance due</p>
          <p className="md:text-2xl font-semibold text-right text-sm">
            {currency} {balanceDue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Customer Details */}
      <div className="flex border-b md:border-none justify-between md:items-end items-start md:mt-[40px] px-4 py-2 md:py-0 md:px-0">
      <div className="md:text-lg font-medium text-sm">
        <p className="font-semibold ">Billed To:</p>
        <p className="mt-[8px] text-[#344054]">{customer.firstName} {customer.lastName}</p>
        <p className="text-[#344054]">{customer.address}</p>
        <p className="text-[#344054]">
          {customer.city}, 
        </p>
        <p className="text-[#344054]">{customer.state}</p>
      </div>

      {/* Invoice and Due Date */}
      <div className="flex flex-col justify-end items-end gap-4 md:text-lg text-sm">
        <p className="font-semibold flex flex-col md:flex-row"><span className="mr-[12px] text-[#667085] font-medium">Invoice Date:</span> {new Date(issueDate).toDateString()}</p>
        <p className="font-semibold flex flex-col md:flex-row"><span className="mr-[12px] text-[#667085] font-medium">Due Date:</span> {new Date(issueDate).toDateString()}</p>
      </div>
      </div>
     


  <div className="px-4 py-4 border-b  md:hidden text-sm">
  {/* Item 1 */}
  <div className="flex justify-between items-center  pb-2">
    <div>
      <p className="font-medium text-black">Hp Elitebook 830 G3</p>
      <p className=" text-gray-400  text-sm">1 × N100,000</p>
    </div>
    <p className="font-bold">N200,000</p>
  </div>

  {/* Item 2 */}
  <div className="flex justify-between items-center  pb-2">
    <div>
      <p className="font-medium text-black">Hp Elitebook 830 G3</p>
      <p className="text-gray-400 text-sm">1 × N100,000</p>
    </div>
    <p className="font-bold">N200,000</p>
  </div>

  {/* Item 3 */}
  <div className="flex justify-between items-center pb-2">
    <div>
      <p className="font-medium text-black">Hp Elitebook 830 G3</p>
      <p className="text-gray-400 text-sm">1 × N100,000</p>
    </div>
    <p className="font-bold">N200,000</p>
  </div>
</div>


      {/* Items Table */}
      <div className="hidden md:block">
  <table className="w-full border-collapse mt-[40px] mb-6">
    <thead>
      <tr className="border-b bg-[#F9FAFB] text-[14px]">
        {/* Explicitly set width for Items column */}
        <th className="text-left p-2 font-medium w-1/4">Items</th> 
        <th className="text-left p-2 font-medium text-sm w-1/6">Quantity</th>
        <th className="text-left p-2 font-medium text-sm w-1/6">Rate</th>
        <th className="text-left p-2 font-medium text-sm w-1/6">Amount</th>
      </tr>
    </thead>
    <tbody>
      {inventories.map((item, index) => (
        <tr key={index} className="border-b text-[14px] font-medium">
          <td className="py-8 px-2">{item.name}</td>
          <td className="py-8 px-2">{item.quantity}</td>
          <td className="py-8 px-2">
            {currency} {item.rate.toLocaleString()}
          </td>
          <td className="py-8 px-2">
            {currency} {(item.rate * item.quantity).toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Bank Payment Details */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center md:mt-[40px] md:pt-[24px]">
      <div className="hidden md:block">
        <p className="font-medium mb-2 bg-[#F2F4F7] pl-2 py-2 pr-8 lg:w-[305px]">Payment Details:</p>
        {bankAccounts.map((account, index) => (
          <div key={index} className="text-[#344054] text-[12px] bg-[#F2F4F7] pl-2 py-2 pr-8 lg:w-[305px]">
            <p>{account.bankName}</p>
            <p>{account.accountNumber}</p>
            <p>{account.accountName}</p>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="md:border-t pt-4 md:pb-[88px] text-sm md:text-[16px] md:pt-[24px] px-4 md:px-0 py-4 md:py-0">
        <div className="flex flex-col gap-6 lg:w-[350px] w-full" >
          <div className="flex justify-between">
            <span className="font-medium text-[#475467]">Sub-total</span>
            <span className="font-semibold">{currency} {balanceDue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span  className="font-medium text-[#475467]">Discount  <span className="bg-[#F9FAFB] py-[6px] px-3 text-sm text-[#98A2B3] hidden md:inline-block">0%</span></span>
            <span className="font-semibold">{currency} {balanceDue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span  className="font-medium text-[#475467]">VAT <span className="bg-[#F9FAFB] py-[6px] px-3 text-sm text-[#98A2B3] hidden md:inline-block">0%</span></span>
            <span className="font-semibold">{currency} 0.00</span>
          </div>
          <div className="flex justify-between font-semibold md:bg-[#0D3C6D] md:text-white md:py-3 md:px-4">
            <span>Total Amount:</span>
            <span>{currency} {balanceDue.toLocaleString()}</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
