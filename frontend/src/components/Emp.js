import employeeStore from "../stores/employeeStore"

export default function Emp({employee}) {
    const store = employeeStore(store => {
        return {
            deleteEmployee: store.deleteEmployee,
            toggleUpdate: store.toggleUpdate 
        };
    })


    return (
        <div key={employee._id}>
                <h3>{employee.name}, {employee.age}, {employee.gender}, {employee.address}, {employee.title}</h3>
                <button onClick={() => store.deleteEmployee(employee._id)}>
                Delete Employee</button>
                <button onClick={() => store.toggleUpdate(employee)}>
                Update Employee</button>
        </div>
    )
}