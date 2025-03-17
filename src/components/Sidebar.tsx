import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Home,
  LogOut,
  UserCog,
  UserPlus,
  ChevronDown,
  ChevronRight,
  Clock,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const navigate = useNavigate();
  const [isEmployeeManagementOpen, setIsEmployeeManagementOpen] =
    useState(false);
  const [isLeaveManagementOpen, setIsLeaveManagementOpen] = useState(false);

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleLogout = async () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please log in again.");
      return;
    }
    try {
      const response = await fetch("http://localhost:8081/auth/logout", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const message = await response.text();
        toast.success("Logout successfully!");
        localStorage.removeItem("token");
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDocumentsClick = () => {
    navigate("/documents");
  };

  // const handleTeamClick = () => {
  //   navigate("/team");
  // };

  const handleSettingsClick = () => {
    navigate("/settings");
  };
  const handleEmployeeManagementClick = () => {
    setIsEmployeeManagementOpen(!isEmployeeManagementOpen);
  };

  const handleEmployeeListClick = () => {
    navigate("/EmployeeList");
  };

  const handleRoleManagementClick = () => {
    navigate("/role-management");
  };

  const handleDepartmentManagementClick = () => {
    navigate("/department-management");
  };

  const handleLeaveManagementClick = () => {
    setIsLeaveManagementOpen((prev) => !prev);
  };

  const handleProjectManagementClick = () => {
    navigate("/project-management");
  };

  const handleTimeSheetManagementClick = () => {
    navigate("/time-sheet-management");
  };

  const handleAttendanceManagementClick = () => {
    navigate("/attendance-management");
  };

  const handlePayRoleManagementClick = () => {
    navigate("/payroll-management");
  };

  const menuItems = [
    { icon: Home, label: "Home", onClick: handleHomeClick },
    {
      icon: UserCog,
      label: "Employee Management",
      onClick: handleEmployeeManagementClick,
      submenu: [
        {
          icon: Users,
          label: "EmployeeList",
          onClick: handleEmployeeListClick,
        },
      ],
      isOpen: isEmployeeManagementOpen,
    },
    {
      icon: UserCog,
      label: "Role Management",
      onClick: handleRoleManagementClick,
    },
    {
      icon: Users,
      label: "Department Management",
      onClick: handleDepartmentManagementClick,
    },
    {
      icon: FileText,
      label: "Leave Management",
      onClick: handleLeaveManagementClick,
      submenu: [
        {
          icon: Users,
          label: "Apply Leave",
          onClick: () => navigate("/leave-application"),
        },
        {
          icon: Users,
          label: "Manage Leaves",
          onClick: () => navigate("/leave-management"),
        },
        {
          icon: Users,
          label: "Employee Leaves",
          onClick: () => navigate("/employee-leave-management"),
        },
      ],
      isOpen: isLeaveManagementOpen,
    },
    {
      icon: Home,
      label: "Project Management",
      onClick: handleProjectManagementClick,
    },
    {
      icon: Clock,
      label: "Timesheet Management",
      onClick: handleTimeSheetManagementClick,
    },
    {
      icon: Users,
      label: "Attendance Management",
      onClick: handleAttendanceManagementClick,
    },
    {
      icon: DollarSign,
      label: "Payroll Management",
      onClick: handlePayRoleManagementClick,
    },
    { icon: FileText, label: "Documents", onClick: handleDocumentsClick },
    // { icon: Users, label: "Team", onClick: handleTeamClick },
    { icon: Settings, label: "Settings", onClick: handleSettingsClick },
    { icon: LogOut, label: "Logout", onClick: handleLogout },
  ];
  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gradient-to-b from-violet-500/10 to-purple-500/10 backdrop-blur-md border-r border-white/20 sidebar-transition ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col p-4 space-y-2">
        {menuItems.map((item) => (
          <div key={item.label}>
            <Button
              variant="ghost"
              className="justify-start w-full text-violet-900 hover:bg-violet-500/10 hover:text-violet-700 transition-colors"
              onClick={item.onClick}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && (
                <>
                  <span className="ml-2 flex-1 text-left">{item.label}</span>
                  {item.submenu && (
                    <span className="ml-2">
                      {isEmployeeManagementOpen ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </span>
                  )}
                </>
              )}
            </Button>

            {/* Submenu */}
            {!isCollapsed && item.submenu && item.isOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {item.submenu.map((subItem) => (
                  <Button
                    key={subItem.label}
                    variant="ghost"
                    className="justify-start w-full pl-6 text-violet-900 hover:bg-violet-500/10 hover:text-violet-700 transition-colors"
                    onClick={subItem.onClick}
                  >
                    <subItem.icon className="h-4 w-4" />
                    <span className="ml-2">{subItem.label}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
