
import React, { useState } from 'react';
import Image from 'next/image';
import Axios from 'axios';

const form =()=>{
    const [fname, getfname] = useState('')
    const [lname, getlname] = useState('')
    const [email, getemail] = useState('')
    const [mobile, getmobile] = useState('')
    const [address, getaddress] = useState('')
    

    const addEmployee = () => {
        Axios.post("http://localhost:3005/create", {
          fname: fname,
          lname: lname,
          email: email,
          mobile: mobile,
          address: address,
        }).then((e) => {
             console.log(e);
        });  
      };


      const getEmployees = () => {
        Axios.get("http://localhost:3005/employees").then((response) => {
          console.log(response);
        });
      };

     return(
         <>
         <div  className="contactform">
             <div className="formcenter">
                 <h1>Next js form</h1>
           <form>
               <label>Firstname</label>
               <input type="text" onChange={(e)=>{getfname(e.target.value)}}/>
               <label>lastname</label>
               <input type="text" onChange={(e)=>{getlname(e.target.value)}}/>
               <label>Email</label>
               <input type="email" onChange={(e)=>{getemail(e.target.value)}}/>
               <label>Mobile NO</label>
               <input type="text" onChange={(e)=>{getmobile(e.target.value)}}/>
               <label>Address</label>
               <input type="text" onChange={(e)=>{getaddress(e.target.value)}}/>
               <button onClick={addEmployee} className="nextformbtn">Submit</button>
               <button onClick={getEmployees} className="nextformbtn">Student records</button>
           </form>
           </div>
           </div>
         </>
     );
}

export default form