import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub,FaFacebook,FaTwitch,FaTwitter,FaWhatsapp,FaDiscord } from 'react-icons/fa';
import BrandCarusal from '../BrandCarusal/BrandCarusal';
import { useAccordionButton } from 'react-bootstrap';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const RightSideNav = () => {

    const {googleLogin}=useContext(AuthContext);

    const handleGoogle=()=>{
        googleLogin()
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className='w-100'>
            <ButtonGroup vertical>
                <Button onClick={handleGoogle} className='mb-2' variant="outline-primary"><FaGoogle />  Login with google</Button>
                <Button variant="outline-dark"><FaGithub />  Login with github</Button>
            </ButtonGroup>
            <div>
                <h5 className='mt-4'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord/> Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarusal></BrandCarusal>
            </div>
        </div>
    );
};

export default RightSideNav;