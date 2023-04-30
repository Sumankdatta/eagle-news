import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h1>this is terms and conditions</h1>
            <h3>if you agree please <Link to='/register'>Register</Link></h3>
        </div>
    );
};

export default TermsAndCondition;