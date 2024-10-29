import { create } from 'zustand';
import axios from "axios";

const employeeStore = create((set) => ({
    employee: null,
    createForm: {
        name: "",
        age: "",
        gender: "",
        address: "",
        title: "",
    },

    updateForm: {
        _id: null,
        name: "",
        age: "",
        gender: "",
        address: "",
        title: "",
    },

    fetchEmployee: async () => {
        // Fetch the Employees
        const res = await axios.get("/employee")
        
        // Set to state
        set({ employee: res.data.employee});
    },

    updateCreateFormField: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value,
                },
            };
        });
    },

    createEmployee: async (e) => {
        e.preventDefault();

        const { createForm, employee } = employeeStore.getState();
        const res = await axios.post("/employee", createForm);

        set({
            employee: [...employee, res.data.employee],
            createForm: {
                name: "",
                age: "",
                gender: "",
                address: "",
                title: "",
            },
        });
    },

    deleteEmployee: async (_id) => {
        // Delete the note
        const res = await axios.delete(`/employee/${_id}`)
        const { employee } = employeeStore.getState()
        // Update state
        const newEmployee = employee.filter((employee) => {
          return employee._id !== _id;
        });

        set({ employee: newEmployee })
    },

    handleUpdateFieldChange:  (e) => {
        const { value, name } = e.target;

        set(state => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value,
                }
            }
        })
    },

    toggleUpdate: ({ _id, name, age, gender, address, title }) => {
        set({
            updateForm: { 
                name,
                age,
                gender,
                address,
                title,
                _id,
            },
        });
    },

    updateEmployee: async (e) => {
        e.preventDefault();

        const {
            updateForm: {name, age, gender, address, title, _id },
            employee
        } = employeeStore.getState();

        // Send the update request
        const res = await axios.put(
          `/employee/${_id}`, {
            name,
            age, 
            gender, 
            address, 
            title
        });
        
        // Update the Employee
        const newEmployee = [...employee];
        const employeeIndex = employee.findIndex(employee => {
          return employee._id === _id;
        });
        newEmployee[employeeIndex] = res.data.employee;

        set({
            employee: newEmployee,
            updateForm: {
                _id: null,
                name: "",
                age: "",
                gender: "",
                address: "",
                title: ""
            },
        });
      },
}));

export default employeeStore;