import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie14PF1kwxDH0pWZpPbAfTf7oU4Q9Ng9hp6GAnVwCpSCnizTIbnIzgTSzUo8WW7Yvn200VYawm6UXY94QO0b0KY00ycPUFN5E');


const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment} />
            </Elements>
        </div>
    );
};

export default ProcessPayment;