
import { DataProvider } from "./context/DataContext";
import InvoicePage from "./pages/ViewInvoicePage";

const App = () => (
  <DataProvider>
    <InvoicePage />
  </DataProvider>
);

export default App;
