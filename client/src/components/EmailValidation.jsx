import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const EmailValidation = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };

    return (
        <div className='mx-auto w-[200px] md:w-[400px] '>
            <Helmet>
                <title>Validate Email</title>
            </Helmet>
            <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full "
                value={email}
                onChange={handleEmailChange}
            />
            {isValidEmail ? (
                <p className='text-green-600'>Email is valid</p>
            ) : (
                <p className='text-red-600'>{email !== "" && <span>Email is not valid</span>} </p>
            )}
        </div>
    );
};

export default EmailValidation;
