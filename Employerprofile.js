import React from "react";
import Enav from "./Navbar1";
import './style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


function Employerprofile(){

    return(
        <div id="background" className=" container fluide px-3">
            <Enav/>
            <h1>Profile</h1>
            <div className='bg-white p-3 rounded w-90'>
                 <i className=" bi bi-person fs-1 me-2"></i><br></br>
                 <form action="">
                    
                        <label htmlFor="name"><strong> Employer Name*</strong></label>
                        <input type="text" placeholder="Madhu"className='form-control rounded'/>
                        <label htmlFor="mail"><strong> Email*</strong></label>
                        <input type="text" placeholder="Madhu@gmail.com"className='form-control rounded'/>
                        <label htmlFor="name"><strong> Website*</strong></label>
                        <input type="text" placeholder="http://sitename.com"className='form-control rounded'/>
                        <label htmlFor="date"><strong> Founded Date*</strong></label>
                        <input type="date" placeholder="dd-mm-yyyy"className='form-control rounded'/>
                        <label htmlFor="name"><strong> Company size*</strong></label>
                        <input type="number" placeholder="700"className='form-control rounded'/>
                        <label htmlFor="name"><strong> Phone Number*</strong></label>
                        <input type="number" placeholder="+91 4354567576"className='form-control rounded'/>
                        <label htmlFor="name"><strong> Category*</strong></label>
                        <input type="text" placeholder="Account,Finance,Marketing....."className='form-control rounded'/>
                       <label htmlFor="paragraph"><strong>About Company*</strong></label>
                       <textarea  id="biobox"type="text" placeholder="Write somthing about you...."className='form-control rounded'/>
                       <p>Brief description for your company. URLs are hyperlinked.</p>
                 </form>
             </div>
             <br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Social Media</h4>
                 <form action="">
                        <label htmlFor="name"><strong> Network1</strong></label>
                        <input type="text" placeholder="#"className='form-control rounded'/>
                       <label htmlFor="paragraph"><strong>Network2</strong></label>
                       <input type="text" placeholder="#"className='form-control rounded'/>
                 </form>
             </div>
             <br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Address & Location</h4>
                 <form action="" >
                        <label htmlFor="name"><strong> Address*</strong></label>
                        <input type="text" placeholder="Chowrastha,chandana,Gazipur sadar"className='form-control rounded'/>
                        <label htmlFor="name"><strong> Pin Code*</strong></label>
                        <input type="text" placeholder="245354"className='form-control rounded'/><br></br>
                       <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Country
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">India</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Australia</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Paris</Dropdown.Item>
                            </Dropdown.Menu>
                     </Dropdown><br></br>
                     <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">State</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Andra</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Telangana</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Krnataka</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Tmilnadu</Dropdown.Item>
                            </Dropdown.Menu>
                     </Dropdown><br></br>
                     <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">City</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Vizag</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Banglore</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Hyderabad</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Tirupathi</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Kolkata</Dropdown.Item>
                            </Dropdown.Menu>
                     </Dropdown><br></br>
                 </form>
             </div><br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Members</h4>
                 <form action="">
                        <label htmlFor="name"><strong> Add & Remove Members</strong></label><br></br>
                       <label htmlFor="paragraph"><strong>Name*</strong></label>
                       <input type="text" placeholder="product designer"className='form-control rounded'/>
                       <label htmlFor="paragraph"><strong>Designation*</strong></label>
                       <input type="text" placeholder="Account Manager"className='form-control rounded'/>
                       <label htmlFor="mail"><strong>Email*</strong></label>
                       <input type="mail" placeholder="new@gmail.com"className='form-control rounded'/><br></br>
                       <button  className="but"type="submit">Remove</button>
                 </form>
             </div><br></br>
             <button type="submit" className="but">Save</button>&nbsp;&nbsp;<button className="but1" type="submit" >Cancel</button>
        </div>
    )
}
export default Employerprofile;