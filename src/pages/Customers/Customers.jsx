import './Customers.css'
import DataTable from '../DataTable';
import CustomerPopup from './CustomerPopup';
import React , { useState } from "react";

function Customers() {

    const data = [
        {code: "C1",firstName: "Jane", lastName: "Doe", email: "abc12@gmail.com", phone: 97122425671},
        {code: "C2",firstName: "John", lastName: "Smith", email: "abc13@gmail.com", phone: 97122425672},
        {code: "C3",firstName: "Jane", lastName: "Doe", email: "abc14@gmail.com", phone: 97122425673},
        {code: "C4",firstName: "John", lastName: "Smith", email: "abc15@gmail.com", phone: 97122425674},
        {code: "C5",firstName: "Jane", lastName: "Doe", email: "abc16@gmail.com", phone: 97122425675},
        {code: "C6",firstName: "John", lastName: "Smith", email: "abc17@gmail.com", phone: 97122425676},
        {code: "C7",firstName: "Jane", lastName: "Doe", email: "abc18@gmail.com", phone: 97122425677},
        {code: "C8",firstName: "John", lastName: "Smith", email: "abc19@gmail.com", phone: 97122425678},
        {code: "C9",firstName: "Jane", lastName: "Doe", email: "abc133@gmail.com", phone: 97122425679},
        {code: "C10",firstName: "John", lastName: "Smith", email: "abc111@gmail.com", phone: 97122425680},
        {code: "C11",firstName: "Jane", lastName: "Doe", email: "abc112@gmail.com", phone: 97122425681},
        {code: "C12",firstName: "John", lastName: "Smith", email: "abc11@gmail.com", phone: 97122425682}
    ];

    const columns = [
        {
            Header: "Code",
            accessor: "code"
        },
        {
            Header: "First Name",
            accessor: "firstName"
        },
        {
            Header: "Last Name",
            accessor: "lastName"
        },

        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "Phone",
            accessor: "phone"
        }
    ];

    const [isModalOpen, setModalOpen] = useState(false);
    const [customerData, setCustomerData] = useState(data);


    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent the default form submission behavior

        const formData = new FormData(event.target);
        const newCustomer = {
            code: formData.get('code'),  // Assuming your input has name="name"
            firstName: formData.get('firstName'),  // Assuming your input has name="name"
            lastName: formData.get('lastName'),  // Assuming your input has name="name"
            email: formData.get('email'),  // Assuming your input has name="email"
            phone: formData.get('phone')  // Assuming your input has name="phone"
        };
        console.log(newCustomer);

        await setCustomerData(customerData => [...customerData, newCustomer]); // Correct way to update state array
        handleCloseModal();
    };

    return (
        <div>
            <div className="App">
                <button className="top-right-button" onClick={handleOpenModal}>Add Customer</button>
                <CustomerPopup
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmit}
                />
            </div>

            <h2 className="App">Customers</h2>
            <DataTable columns={columns} data={customerData}/>
        </div>
    );
}

export default Customers;