// src/components/CustomerModal.js
import React from 'react';

const CustomerPopup = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    return (
        <div  style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: 40,
                borderRadius: 5,
                width: '70%',
                maxWidth: 300
            }}>
                <div class="popup-content">
                <h2>Add Customer</h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Code:</label>
                            <input type="text" name="code" required/>
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input type="text" name="firstName" required/>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text" name="lastName" required/>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" required/>
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input type="text" name="phone"/>
                        </div>
                        <button className="" type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CustomerPopup;