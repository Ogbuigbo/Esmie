export interface Inventory {
  name: string;
  rate: number;
  quantity: number;
  id?: string; // Optional in case ID isn't always passed
}

export interface Customer {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  email?: string;
  id?: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
  currency?: string; // Optional
  id?: string;
  isActive?: boolean; // Optional
}

export interface Annotation {
  action: string;
  cognitoUserId: string;
  timestamp: string;
  name: string;
}

export interface InvoiceData {
  currency: string;
  issueDate: string; // Date in ISO string format
  invoiceNumber: string;
  balanceDue: number;
  totalPaid?: number; // Optional
  status?: string;
  total?: number;
  customer: Customer;
  inventories: Inventory[];
  bankAccounts: BankAccount[];
  annotations?: Annotation[];
}

export interface PaymentHistory {
  entityType: string;
  companyId: string;
  entityId: string;
  status: string;
  createdAt: string;
  outletId_status: string;
  paymentDate: string;
  entityId_status: string;
  amount: number;
  id: string;
  paymentMethod: string;
  paymentType: string;
  customerId: string;
  receiptKey?: string; // Optional because not all entries have a receipt key
}

export interface DataContextType {
  invoiceData: InvoiceData;
  paymentHistory: PaymentHistory[];
}
