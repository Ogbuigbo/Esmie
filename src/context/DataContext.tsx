import { createContext, useContext, ReactNode } from "react";
import { DataContextType, InvoiceData, PaymentHistory } from "../types";

// Create context with a default value of null
const DataContext = createContext<DataContextType | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  // Invoice Data Mock
  const invoiceData: InvoiceData = {
    currency: "NGN",
    issueDate: "2022-08-12T00:00:00.000Z",
    invoiceNumber: "INV-001",
    balanceDue: 4000,
    totalPaid: 100000,
    total: 200000,
    status: "due",
    customer: {
      firstName: "Kelly",
      lastName: "Audu",
      address: "Illasan New Road, Ikate",
      city: "Lekki",
      state: "Lagos",
      phone: "+2348123456789",
      email: "kelly.audu@example.io",
    },
    inventories: [
      {
        name: "Aso Oke",
        rate: 10000,
        quantity: 10,
        id: "c1f8da0e-37a7-43f2-9c71-5ad7ead6d804",
      },
      {
        name: "Aso Oke",
        rate: 10000,
        quantity: 10,
        id: "c1f8da0e-37a7-43f2-9c71-5ad7ead6d804",
      },
    ],
    bankAccounts: [
      {
        bankName: "UBA",
        accountNumber: "00100010056",
        accountName: "ESEMIE NIGERIA LIMITED",
        currency: "NGN",
        id: "ed384159-73b3-4ad4-b8ad-132cba8f1cf1",
        isActive: true,
      },
    ],
    annotations: [
      {
        action: "created",
        cognitoUserId: "54bc1263-4361-435b-b1c0-f36cae02d0d4",
        timestamp: "2024-12-03T06:25:34.205Z",
        name: "Ghost Hub",
      },
    ],
  };

  // Updated paymentHistory data
  const paymentHistory: PaymentHistory[] = [
    {
      entityType: "revenue",
      companyId: "65ed5045-8a67-46a1-81d6-9743cab2cd71",
      entityId: "e716b375-e6d2-4491-90d6-e936398e3001",
      status: "successful",
      createdAt: "2024-10-12T18:49:32.881Z",
      outletId_status: "undefined#successful",
      paymentDate: "12 Oct, 2024",
      entityId_status: "e716b375-e6d2-4491-90d6-e936398e3001#successful",
      amount: 10000,
      id: "681a307d-e389-4f48-80b4-d6e872413320",
      paymentMethod: "Transfer",
      paymentType: "Manual",
      customerId: "6ef97d28-6946-4948-96da-6ecac8927c4b",
    },
    {
      entityType: "revenue",
      companyId: "65ed5045-8a67-46a1-81d6-9743cab2cd71",
      entityId: "e716b375-e6d2-4491-90d6-e936398e3001",
      status: "successful",
      createdAt: "2024-10-12T18:49:32.881Z",
      outletId_status: "undefined#successful",
      paymentDate: "12 Oct, 2024",
      entityId_status: "e716b375-e6d2-4491-90d6-e936398e3001#successful",
      amount: 10000,
      id: "681a307d-e389-4f48-80b4-d6e872413320",
      paymentMethod: "Cash",
      paymentType: "Uploaded",
      customerId: "6ef97d28-6946-4948-96da-6ecac8927c4b",
      receiptKey: "https://google.com",
    },
  ];

  return (
    <DataContext.Provider value={{ invoiceData, paymentHistory }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook to use the data context
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};
