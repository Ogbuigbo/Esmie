import { useData } from "../context/DataContext";
import Download from "../assets/black";

const PaymentHistory = () => {
  const { paymentHistory } = useData();

  return (
    <div className="border rounded-xl hidden md:block ">
      {/* Header */}
      <h1 className="text-lg font-semibold pl-6 pt-6 pb-4">Record Payment History</h1>

      {/* Table */}
      <table className="w-full table-fixed rounded-t-xl">
        <thead>
          <tr className="bg-[#F9FAFB] border-b">
            <th className="px-6 py-3 text-left rounded-tl-xl">Invoice number</th>
            <th className="px-6 py-3 text-left">Payment type</th>
            <th className="px-6 py-3 text-left">Payment method</th>
            <th className="px-6 py-3 text-left">Date</th>
            <th className="px-6 py-3 text-left">Amount</th>
            <th className="px-6 py-3 text-right rounded-tr-xl"></th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">Aso oke</td>
              <td className="px-6 py-4">{payment.paymentType}</td>
              <td className="px-6 py-4">{payment.paymentMethod}</td>
              <td className="px-6 py-4">{payment.paymentDate}</td>
              <td className="px-6 py-4">N{payment.amount.toLocaleString()}</td>
              <td className="px-6 py-4 text-right">
                <div
                  className={`bg-[#F2F4F7] h-[48px] w-[48px] flex items-center justify-center rounded-[5px] ${
                    index === 0 ? "opacity-20" : ""
                  }`}
                >
                  <Download />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
