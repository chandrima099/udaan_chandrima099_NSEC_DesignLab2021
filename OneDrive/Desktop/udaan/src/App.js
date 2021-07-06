//import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, NavDropdown, MenuItem, Form, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

function App() {
  return (
<div className="App">

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="https://udaan.com/images/udaan_logo.a32459e30db9c15750d09e15e1f0ba8f.png"
          width="50"
          height="45"
          className="d-inline-block align-top"
          alt="Company logo"/>
          <h4>UDAAN</h4>
      </Navbar.Brand>
  
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
          </Nav>

             <Form inline>
              
               <FormControl type="text" placeholder="Search for products" className="mr-sm-2" />
               <button variant="outline-success" class="search">Search</button>
               <button class="btn btn-default btn-color btn-bg-color btn-sm col-xs-2 margin-left "><Nav.Link href="#home"> About</Nav.Link> </button>
               <button class="btn btn-default btn-color btn-bg-color btn-sm col-xs-2 margin-left"><Nav.Link href="#link">Download App</Nav.Link> </button>
               <button class="btn btn-danger" id="register">Register</button>
               <button variant="outline-danger" class="btn btn-danger btn-color btn-bg-color btn-sm col-xs-2 margin-left">Login</button>{' '}
             </Form>	
        </Navbar.Collapse>
    </Navbar>
<div class="banner">   
     <h1> India's largest B2B Platform for businesses & shop-owners</h1> 

    
</div>

<div class= "products"> 

  <p class="cat">More than 5 Lakh products </p>
    
   <div class="det">
      <div class="leftbox">
     
        Electronics Appliances <img class="elec" src="https://thumbs.dreamstime.com/b/mobile-phone-cartoon-character-mascot-giving-double-thumbs-up-mobile-phone-thumbs-up-cartoon-mascot-156284748.jpg"/>
      
      </div>

      <div class="middlebox">
      
      Footware <img class="shoes" src="https://w7.pngwing.com/pngs/296/367/png-transparent-shoe-sneakers-graphy-canvas-cartoon-shoes-miscellaneous-white-photography-thumbnail.png"/>
    
      </div>

      <div class="rightbox">
      
        Clothing & accessories <img class= "clothes" src="https://img.pngio.com/clothes-cartoon-png-cartoon-image-of-dress-transparent-png-cartoon-dress-png-840_980.png"/>
      
      </div>
    </div>  
  </div>


<div class="steps">
  
   <div class="trade"><h2>Start trading in 3 simple steps</h2></div>

    
      <div id="leftbox">
     
        <img class="profile" src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png"/>Create An Account
     
      </div>

      <div id="middlebox">
      
        <img  class="kyc" src="https://thumbs.dreamstime.com/z/phone-locked-notification-button-password-field-vector-cartoon-illustration-mobile-smartphone-security-personal-access-user-115866272.jpg"/>Complete Shop KYC
      
      </div>

      <div id="rightbox">
      
       <img  class="order" src="https://static.vecteezy.com/system/resources/previews/000/646/376/non_2x/online-shopping-flat-icon-vector.jpg"/>Start Ordering
    
      </div> 
  

</div>

  
</div>


   
  );


 
}

export default App;