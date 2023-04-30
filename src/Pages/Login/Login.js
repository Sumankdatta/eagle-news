import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {userLogin,setLoading}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        userLogin(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset()
            if(user.emailVerified){
               navigate(from,{replace:true})
               }
               else{
                toast.error('verify your email')
                
               }
               
        })
        .catch(error=>{
            console.error(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    return (
        <div className='mx-auto mt-5 w-75 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-5'>
        <h2 className='mb-4'>Login</h2>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' placeholder="Password" />

        </Form.Group>
     
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <p>New to this website ? please <Link to='/register'>Register</Link></p>
        <p>Forget password ? please <Link to='/resetpassword'>Reset password</Link></p>
    </Form>
     
    </div>
    );
};

export default Login;