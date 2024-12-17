import { SetStateAction, useState } from "react";
import { ChevronsLeft } from "lucide-react";
import SubStract from "../assets/subtract";
import Invoice from "../assets/invoice";
import Money from "../assets/money";
import Element from "../assets/elements";
import Content from "../assets/content";
import Chart from "../assets/chart";
import User from "../assets/user";
import Setting from "../assets/setting";
import InvoiceDetails from "../components/InvoiceDetails";
import PaymentDetails from "../components/PaymentDetails";
import PaymentHistory from "../components/PaymentHistory";
import InvoiceActions from "../components/InvoiceActions";
import InvoiceHeader from "../components/InvoiceHeader";

// Sidebar navigation items
const navItems = [
  { label: "Insights", icon: SubStract },
  { label: "Sales", icon: Invoice },
  { label: "Expenses", icon: Money },
  { label: "Customers", icon: Element },
  { label: "Inventory", icon: Content },
  { label: "Reports", icon: Chart },
  { label: "Users", icon: User },
  { label: "Settings", icon: Setting },
];

const ViewInvoicePage = () => {
  const [isCollapsed, setCollapsed] = useState(true); // Sidebar starts collapsed
  const [activeItem, setActiveItem] = useState("Insights"); // Default active item is "Insights"

  const isSidebarExpanded = !isCollapsed; // Determine if sidebar is expanded

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  const handleItemClick = (label: SetStateAction<string>) => {
    setActiveItem(label); // Set clicked item as active
  };

  return (
    <div className="flex h-screen relative overflow-scroll ">
      {/* Sidebar */}
      <div
        className={`h-[1024px] bg-[#0D3C6D] text-white flex-col ${
          isSidebarExpanded ? "items-start" : "items-center"
        }  transition-all duration-300 ${
          isSidebarExpanded ? "w-64" : "w-[100px]"
        } z-50 hidden lg:flex`} /* Hides sidebar on smaller screens */
        onMouseEnter={() => setCollapsed(false)} // Expand when hovering
        onMouseLeave={() => setCollapsed(true)} // Collapse on hover exit
      >
        {/* Logo and Collapse Button */}
        <div
          className={`flex items-center ${
            isSidebarExpanded ? "justify-between" : "justify-center"
          } py-4 w-full px-8`}
        >
          {/* Logo */}
          {!isSidebarExpanded ? (
            <div className="bg-[#044E97]  flex items-center justify-center rounded-lg">
            <img
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734206283/Frame_6356303_hnkjou.png"
              alt="logo"
              className="w-[38.5px] h-[38.5px]"
            />
            </div>
          ) : (
            <span className="text-white text-2xl font-bold flex items-center">
              <span className="text-orange-500 flex items-center">
                <span className="mr-[-8px]">e</span>
                <img
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734206283/Frame_6356303_hnkjou.png"
                  alt="logo"
                  className="w-[38.5px] h-[38.5px] inline-block align-middle"
                />
                <span className="ml-[-8px]">emie</span>
              </span>
            </span>
          )}

          {/* Collapse Button */}
          {isSidebarExpanded && (
            <button onClick={toggleCollapse} className="text-white ml-auto p-2 rounded-xl bg-[#044E97]">
              <ChevronsLeft />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 w-full mt-[24px]">
          <ul
            className={`flex flex-col space-y-[12px] px-[28px] ${
              isSidebarExpanded ? "rounded-full" : "rounded-[8px]"
            } items-center w-full`}
          >
            {navItems.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className={`flex items-center w-full p-[12px] ${
                  isSidebarExpanded
                    ? "justify-start rounded-2xl"
                    : "justify-center rounded-[8px]"
                } cursor-pointer hover:text-[#0D3C6D] transition-all duration-200 ${
                  activeItem === label
                    ? "bg-[#BBDDFC] text-[#0D3C6D]" // Highlight active item
                    : "hover:bg-[#BBDDFC]" // Hover effect for all items
                }`}
                onClick={() => handleItemClick(label)} // Set item as active when clicked
              >
                <Icon />
                <span
                  className={`${
                    isSidebarExpanded ? "ml-3" : "hidden"
                  } whitespace-nowrap`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1  md:p-8 p-4 transition-all duration-300  ml-0 `} // Adjust margin for smaller screens
      >
        <InvoiceHeader />
        <div className="space-y-4 pb-16">
          <InvoiceDetails />
          <PaymentDetails />
          <InvoiceActions />
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
};

export default ViewInvoicePage;
