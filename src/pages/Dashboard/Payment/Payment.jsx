import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckOutForm';


const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading='Please Complete' heading='Payment'/>
            <h2 className='text-3xl text-white p-10'>Teka o teka tumi uira uira asho.... </h2>
            <CheckoutForm/>
        </div>
    );
};

export default Payment;