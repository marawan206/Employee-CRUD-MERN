import employeeStore from "../stores/employeeStore";
import Employee from "./Emp";

export default function Employees() {
    const store = employeeStore();
    return (
        <div>
        <h2>Employees:</h2>
        {store.employee && 
          store.employee.map((employee) => { 
            return ( 
              <Employee employee = {employee} key={employee._id} />
            );
          })
        }
        </div>  
    )
}