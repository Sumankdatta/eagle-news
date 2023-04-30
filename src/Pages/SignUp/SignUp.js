import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const [accepted, setAccepted] = useState(false);

    const { createUser, userProfileUpdate, emailVerify,user } = useContext(AuthContext);
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, url, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                user.photoURL = url
                console.log(user);
                handleUpdateUserProfile(name, url)
                handleEmailVerify()

                form.reset()
                
             
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        userProfileUpdate(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }

    const handleEmailVerify = () => {
        emailVerify()
        .then(() => { 
           console.log('email verification send');
          toast.success('send')

        })
        .catch(error => console.error(error))

    }

    const handleChecked = (event) => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='mx-auto mt-5 w-75 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-5'>
            <h2 className='mb-4'>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="url" name='url' placeholder="Photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>

                    <Form.Control name='password' type='password' placeholder="Password" required />

                    <p className='text-danger'></p>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleChecked}
                            type="checkbox"
                            label={<>Accepted <Link to='/terms'>Terms and condition</Link></>} />
                    </Form.Group>

                </Form.Group>

                <Button disabled={!accepted} variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account ? please <Link to='/login'>Login</Link></p>

            </Form>


        </div>
    );
};

export default SignUp;