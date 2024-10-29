import employeeStore from "../stores/employeeStore";

export default function UpdateForm() {
    const store = employeeStore();
    if (!store.updateForm._id) return <></>;
  return (
        <div>
        <h2>Update Employee
          <form onSubmit={store.updateEmployee}>
          <input 
            onChange= {store.handleUpdateFieldChange}
            value={store.updateForm.name} 
            name="name"
            placeholder="Employee Name"
            />
            <input 
            onChange= {store.handleUpdateFieldChange}
            value={store.updateForm.age} 
            name="age"
            placeholder="Age"
            type="number"
            min="0"
            />
            <select
            onChange= {store.updateCreateFormField}
            value={store.createForm.gender} 
            name="gender"
            placeholder="Gender">
            <option value= "" disabled> Select Gender </option>
            <option value= "Male">Male</option>
            <option value= "Female">Female</option>
            <option value= "Prefer not to say">Prefer not to say</option>
            </select>
            <input 
            onChange= {store.handleUpdateFieldChange}
            value= {store.updateForm.address} 
            name="address"
            placeholder="Address"
            />
            <input 
            onChange= {store.handleUpdateFieldChange}
            value= {store.updateForm.title} 
            name="title"
            placeholder="Job Title"
            />
            <button type="submit">Update Employee</button>
          </form>
        </h2>
      </div>
  );
}