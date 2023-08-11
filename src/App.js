import { useState } from "react";
import "./App.css";

function App() {
  const [formdata,setformdata]=useState({firstName:"", lastName:"", email:"", country:"",address:"",city:"",state:"",zip:"",comments:false,candidates:false,offers:false,pushNotifications:""})
  
  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setformdata(prevformdata=>{
       return{
        ...prevformdata,
        [name]:type==="checkbox" ? checked:value
       }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("printing....");
    console.log(formdata);

  }
  return (
   <div className="flex flex-col items-center mt-2 w-[1200px] mx-auto">
    <form onSubmit={submitHandler}>
      
    <label htmlFor="firstName" className="font-semibold">First Name</label> <br/>
      <input type="text" name="firstName" onChange={changeHandler} value={formdata.firstName} id="firstName" placeholder="Ujjwal" 
      className="border-yellow-200 border w-[900px] mt-1 rounded-sm p-0.5"/> <br />
    
    
    <label htmlFor="lastName" className="font-semibold">Last Name</label> <br/>
      <input type="text" name="lastName" onChange={changeHandler} value={formdata.lastName} id="lastName" placeholder="Singh" 
      className="border-orange-200 border w-[900px] mt-1 rounded-sm p-0.5"/> <br />
    

    <label htmlFor="email" className="font-semibold">Email</label> <br/>
      <input type="email" name="email" onChange={changeHandler} value={formdata.email} id="email" placeholder="Ujjwal2392003@gmail.com" 
      className="border-red-200 border w-[900px] mt-1 rounded-sm p-0.5"/> <br />

<label htmlFor="country" className="font-semibold">Country</label> <br/>
    <select name="country" id="country" onChange={changeHandler} value={formdata.country} className="w-[900px] p-0.5 mt-1 rounded-sm border-blue-200 border">
     <option value="India">India</option>
     <option value="Spain">Spain</option>
     <option value="Argentina">Argentina</option>
     <option value="Switzerland">Switzerland</option>
    </select><br />
       
    <label htmlFor="address" className="font-semibold">Street Address</label> <br/>
      <input type="text" name="address" onChange={changeHandler} value={formdata.address} id="address" placeholder="L.I.G.-132, Vistar Nagar"
      className="border-purple-200 border w-[900px] mt-1 rounded-sm p-0.5"/> <br />
       
       <label htmlFor="city" className="font-semibold">City</label> <br/>
      <input type="text" name="city" onChange={changeHandler} value={formdata.city} id="city" placeholder="Gorakhpur" 
      className="border-green-200 border w-[900px] mt-1 rounded-sm p-0.5"/> <br />
       
       <label htmlFor="state" className="font-semibold">State/Province</label> <br/>
      <input type="text" name="state" onChange={changeHandler} value={formdata.state} id="state" placeholder="Uttar Pradesh" 
      className="border-cyan-200 border w-[900px] mt-1 rounded-sm p-0.5"/> <br />
       
       <label htmlFor="zip" className="font-semibold">ZIP/Postal Code</label> <br/>
      <input type="text" name="zip" onChange={changeHandler} value={formdata.zip} id="zip" placeholder="273007" 
      className="border-pink-200 border w-[900px] mt-1 rounded-sm p-0.5"/> <br />
    
   <fieldset className="mt-1">
    <legend className="font-semibold">By Email</legend>
 
    <div className="flex  mt-2">

    <input id="comments"
    name="comments"
    type="checkbox"
    checked={formdata.comments}
    onChange={changeHandler} className="mt-[-22px] mr-2"/>
    
    <div>
      <label htmlFor="comments" className="font-semibold">Comments</label>
      <p className="text-slate-400 ">Get notified when someone posts a comment on posting.</p>
    </div>

    </div>

 
    <div className="flex ">

    <input id="candidates"
    name="candidates"
    type="checkbox"
    checked={formdata.candidates}
    onChange={changeHandler} className="mt-[-22px] mr-2"/>
    
    <div>
      <label htmlFor="candidates" className="font-semibold">Candidates</label>
      <p className="text-slate-400 ">Get notified when a candidate applies for a job.</p>
    </div>

    </div>

 
    <div className="flex ">

    <input id="offers"
    name="offers"
    type="checkbox"
    checked={formdata.offers}
    onChange={changeHandler} className="mt-[-22px] mr-2"/>
    
    <div>
      <label htmlFor="offers" className="font-semibold">Offers</label>
      <p className="text-slate-400 ">Get notified when a candidate accepts or rejects an offer.</p>
    </div>

    </div>
   </fieldset>

<fieldset className="mt-1 ">
  <legend className="font-semibold">Push Notifications</legend>
  <p className="text-slate-400 mb-1">These are delivered via SMS to your mobile phone.</p>


  <input type="radio"
  id="pushEverything"
  name="pushNotifications"
  value="Everything"
  onChange={changeHandler}
  className="mr-1"/>
  <label htmlFor="pushEverything" className="font-semibold">Everything</label>

<br />
  <input type="radio"
  id="pushEmail"
  name="pushNotifications"
  value="Same as email"
  onChange={changeHandler}
  className="mr-1"/>
  <label htmlFor="pushEmail" className="font-semibold">Same as email</label>

  <br />
  <input type="radio"
  id="pushNothing"
  name="pushNotifications"
  value="No push notifications"
  onChange={changeHandler}
  className="mr-1"/>
  <label htmlFor="pushNothing" className="font-semibold">No push notifications</label>


</fieldset>

<button className="bg-blue-500 text-white font-bold rounded py-2 px-4 mt-2"> Save </button>

    </form>
   </div>
  );
}

export default App;
