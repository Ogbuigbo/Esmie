import { useData } from "../context/DataContext";

const PaymentDetails = () => {
  const { invoiceData } = useData();

  const {
    bankAccounts,
  } = invoiceData;

  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center pt-[68px] md:hidden md:pt-[24px]">
      <div className="">
        <p className="font-medium mb-2 bg-[#F2F4F7] pl-2 py-2 pr-8 lg:w-[305px]">Payment Details:</p>
        {bankAccounts.map((account, index) => (
          <div key={index} className="text-[#344054] text-[12px] bg-[#F2F4F7] pl-2 py-2 pr-8 lg:w-[305px]">
            <p>{account.bankName}</p>
            <p>{account.accountNumber}</p>
            <p>{account.accountName}</p>
          </div>
        ))}
      </div>
      </div>
  );
};

export default PaymentDetails;
