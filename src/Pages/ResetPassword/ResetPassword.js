import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ResetPassword = () => {
    return (
        <div  className='mx-auto mt-5 w-75 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-5'>
        <h3>Reset Password</h3>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
    </Form.Group>
    <Button  variant="primary" type="submit">
        Submit
    </Button>
    </div>
    );
};

export default ResetPassword;