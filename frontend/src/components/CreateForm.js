import employeeStore from "../stores/employeeStore";

export default function CreateForm() {
    const store = employeeStore();
    if (store.updateForm._id) return <></>;

  return (
     <div>
      <h2>Add Employee</h2>
      <form onSubmit={store.createEmployee}>
        <input 
          onChange= {store.updateCreateFormField}
          value={store.createForm.name} 
          name="name"
          placeholder="Employee Name"
          />
          <input 
          onChange= {store.updateCreateFormField}
          value={store.createForm.age} 
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
          onChange= {store.updateCreateFormField}
          value= {store.createForm.address} 
          name="address"
          placeholder="Address"
          />
          <input 
          onChange= {store.updateCreateFormField}
          value= {store.createForm.title} 
          name="title"
          placeholder="Job Title"
          />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  )
}
