# View Invoice Page - Esemie Application

### **Objective**  
Create a **"View Invoice"** page for the Esemie application using React and TypeScript. The page will display detailed invoice information, payment details, and payment history with interactive actions for users.

---

## **Features**

1. **Invoice Details**  
   - Displays essential invoice data such as invoice number, amount due, issue date, and status.

2. **Payment Details**  
   - Shows payment-related information (amount paid, payment method, and payment date).

3. **Payment History**  
   - A detailed table showcasing the payment history (e.g., installment records, timestamps, and transaction status).

4. **Responsive Design**  
   - Fully optimized for desktop, tablet, and mobile views to ensure a smooth user experience across devices.

5. **Interactivity**  
   - Buttons or interactive elements (e.g., "Pay Now" or "Download Invoice").

---

## **Tech Stack**

- **React**: For building the UI components.
- **TypeScript**: To ensure type safety and improve development efficiency.
- **Tailwind CSS**: For clean, scalable, and efficient styling.
- **State Management**:  
   - React Context API (or Redux for scalability) to manage invoice data state.
- **Accessibility**: Best practices applied for semantic HTML and proper alt text.

---

## **Design Reference**

The design should strictly follow the Figma prototype:  
[**Figma Design – View Invoice Page**](https://www.figma.com/design/Wg4iaWiDliHQg4TLP4NVnB/Assessment?node-id=0-1&node-type=canvas&t=Su50Ed83AvYhG4BN-0)

---

## **Project Structure**

The project follows a modular and clean file structure for better maintainability:

```plaintext
src/
│
├── components/
│   ├── InvoiceDetails.tsx         # Displays invoice data
│   ├── PaymentDetails.tsx         # Renders payment summary
│   ├── PaymentHistory.tsx         # Table for payment history
│   └── ActionButtons.tsx          # Contains interactive buttons
│
├── context/
│   └── InvoiceContext.tsx         # State management for invoice data
│
├── data/
│   └── mockInvoiceData.ts         # Mock data for invoice details
│
├── pages/
│   └── ViewInvoicePage.tsx        # Parent component for the page
│
├── styles/
│   └── globals.css                # Global TailwindCSS configurations
│
└── utils/
    └── formatters.ts              # Utility functions for formatting data (e.g., dates, currency)
```

---

## **Mock Data**

Use mock data to simulate the invoice details, payment summary, and payment history. Example structure:

```typescript
export const mockInvoiceData = {
  invoiceId: "INV-2024-001",
  issuedDate: "2024-12-01",
  dueDate: "2024-12-15",
  amountDue: 1500.0,
  status: "Pending",
  paymentDetails: {
    amountPaid: 500.0,
    paymentMethod: "Credit Card",
    paymentDate: "2024-12-05",
  },
  paymentHistory: [
    { id: 1, amount: 500, date: "2024-12-05", status: "Successful" },
    { id: 2, amount: 500, date: "2024-12-10", status: "Pending" },
  ],
};
```

---

## **Installation**

To run this project locally:

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd esemie-view-invoice
   ```

2. **Install Dependencies**  
   Ensure Node.js and npm/yarn are installed. Run:  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View the Application**  
   Open your browser and navigate to `http://localhost:3000`.

---

## **Responsive Design**

- Desktop: Optimized for large screens.
- Tablet: Ensures smooth and clean layout.
- Mobile: Fully functional on smaller screens.

---

## **Code Quality**

- Modular and reusable React components.
- Strong type safety using TypeScript.
- Semantic HTML and accessibility best practices.
- Scalable state management using React Context API.

---

## **Contributing**

Feel free to contribute to the project!  
- Fork the repository.  
- Create a feature branch.  
- Submit a pull request with detailed explanations.



---


