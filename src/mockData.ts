// mockData.ts
export const invoiceData = {
    id: "INV-001",
    company: {
      name: "Esemie",
      address: "3, Ogusanya drive, Surulere, Lagos",
      phone: "07058857363",
    },
    billedTo: {
      name: "Kelly Audu",
      address: "Ilasan New Road, Ikate, Lekki, Lagos State",
    },
    invoiceDate: "12th, August 2022",
    dueDate: "12th, August 2022",
    balanceDue: 4000,
    items: [
      { name: "Aso oke", quantity: 10, rate: 10000, amount: 10000 },
      { name: "Aso oke", quantity: 10, rate: 10000, amount: 10000 },
    ],
    totalAmount: 0,
  };
  
  export const paymentHistory = [
    { id: 1, type: "Manual", method: "Transfer", date: "12 Oct, 2024", amount: 10000 },
    { id: 2, type: "Uploaded", method: "Cash", date: "12 Oct, 2024", amount: 10000 },
  ];
  
  export const paymentDetails = {
    bank: "UBA",
    accountNumber: "0001001056",
    accountName: "ESMIE NIGERIA LIMITED",
  };
  