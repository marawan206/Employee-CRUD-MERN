import { useEffect } from "react";
import employeeStore from "../stores/employeeStore";
import Employees from "../components/Employees";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";

export default function EmpPage() {
    // add ((s) => s.fetchEmployee) for better performance
    const store = employeeStore(); 
    
    // Use effect
    useEffect(() => {
      store.fetchEmployee()
    }, []);

  return (
    <div>
        <Employees />
        <UpdateForm />
        <CreateForm />
    </div>
  );
}
