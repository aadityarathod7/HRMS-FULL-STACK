import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";
import DashboardNavbar from "@/components/Navbar";
import DashboardSidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

const TimeSheetManagement: React.FC = () => {
  const { toasts, addToast, removeToast } = useToast();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <DashboardSidebar isCollapsed={isCollapsed} />
      <DashboardNavbar toggleSidebar={toggleSidebar} />

      <div
        className={`flex flex-col flex-grow w-full max-w-6xl transition-all duration-300 ${
          isCollapsed ? "ml-40" : "ml-80"
        }`}
      >
        <div className="p-5 flex-grow">
          <button onClick={() => addToast("New Time Sheet Notification!")}>
            Show Toast
          </button>
          {toasts.map((message, index) => (
            <Toast
              key={index}
              message={message}
              onClose={() => removeToast(index)}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TimeSheetManagement;
