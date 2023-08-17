import React, { useState } from 'react';

function CustomerInputTest(props) {
    const [ customer, setCustomer ] = useState({
        name: "",
        level: "",
        age: ""
    });

    const handleCustomerInfoChange = (e) => {
        const { name, value } = e.target;

        setCustomer ({
            ...customer,
            [name]: value
        })
    }


    return (
        <div>
            <h1>고객명: {customer.name}</h1>
            <h1>등급: {customer.level}</h1>
            <h1>나이: {customer.age}</h1>
            <input type="text" name='name' onChange={handleCustomerInfoChange} />
            <input type="text" name='level' onChange={handleCustomerInfoChange} />
            <input type="text" name='age' onChange={handleCustomerInfoChange} />
        </div>
    );
}


export default CustomerInputTest;
