import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Documents from "./pages/Documents";
import View from "./pages/View";
import EmployeeRegistration from "./pages/EmployeeRegistration";
import EmployeeList from "./pages/EmployeeList";
import RoleManagement from "./pages/RoleManagement";
import DepartmentManagement from "./pages/DepartmentManagement";
import ViewUser from "./pages/ViewEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import RoleRegistration from "./pages/RoleRegistration";
import ViewRole from "./pages/ViewRole";
import DepartmentRegistration from "./pages/DepartmentRegistration";
import ViewDepartment from "./pages/ViewDepartment";
import EmployeeLeaveManagement from "./pages/EmployeeLeaveManagement";
import LeaveBalance from "./pages/LeaveBalance";
import TimeSheetManagement from "./pages/TimeSheetManagement";
import React from "react";
import { ToastProvider } from "@/context/ToastContext";
import ProjectManagement from "./pages/ProjectManagement";
import ProjectRegistration from "./pages/ProjectRegistration";
import ViewProject from "./pages/ViewProject";
import LeaveApplication from "./pages/LeaveApplication";
import ViewLeave from "./pages/ViewLeave";
import LeaveManagement from "./pages/LeaveManagement";
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ToastProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/leave-balance" element={<LeaveBalance />} />
              <Route path="/employeelist" element={<EmployeeList />} />
              <Route
                path="/department-management"
                element={<DepartmentManagement />}
              />
              <Route path="/view-project/:id" element={<ViewProject />} />
              <Route path="/role-management" element={<RoleManagement />} />
              <Route path="/project-management" element={<ProjectManagement />} />
              <Route path="/employee-leave-management" element={<EmployeeLeaveManagement />} />
              <Route path="/leave-management" element={<LeaveManagement />} />
              <Route path="/view/:id" element={<View />} />
              <Route path="/view-role/:id" element={<ViewRole />} />
              <Route path="/view-department/:id" element={<ViewDepartment />} />
              <Route path="/view-employee/:id" element={<ViewEmployee />} />
              <Route path="/view-leave/:id" element={<ViewLeave />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/leave-application" element={<LeaveApplication />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route
                path="/employeeregistration"
                element={<EmployeeRegistration />}
              />
              <Route
                path="/department-registration"
                element={<DepartmentRegistration />}
              />
              <Route path="/roleregistration" element={<RoleRegistration />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/time-sheet-management"
                element={<TimeSheetManagement />}
              />

              <Route path="/project-registration" element={<ProjectRegistration />} />
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
