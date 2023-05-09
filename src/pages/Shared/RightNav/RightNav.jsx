import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {FaGoogle,FaGithub , FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button variant="outline-primary" ><FaGoogle></FaGoogle> login with Google</Button>
            <br />
      <Button variant="outline-secondary" className='mt-3'> <FaGithub/> login with github</Button>
      <div className='mt-3'>
        <h3>Find Us on</h3>
        <ListGroup>
      <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
    
    </ListGroup>
      </div>
      <QZone></QZone>
      <div>
      <Card className=" text-white">
      <Card.Img src={bg} alt="Card image" />
      <Card.ImgOverlay>
       <div className=''>
       <Card.Title>Create an Amazing Newspaper</Card.Title>
        <Card.Text>
        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </Card.Text>
       
       </div>
      </Card.ImgOverlay>
    </Card>

      </div>
        </div>
        
    );
};

export default RightNav;