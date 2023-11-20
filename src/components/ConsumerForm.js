import { useEffect, useState } from "react";

function ConsumerForm(props)
{
    const [Name,setName] = useState(props.NameValue);
    const [ID,setID] = useState(props.IDValue);
    const [PhoneNo ,setPhoneNo] = useState(props.PhoneNoValue);
    const [EmailID,setEmailID] = useState(props.EmailIDValue);
    const [PetName,setPetName] = useState(props.PetNameValue);
    const [Breed,setBreed] = useState(props.BreedValue);
    const [Services,setServices] = useState(props.ServicesValue);

    useEffect(()=>{
        setName(props.NameValue);
        setID(props.IDValue);
        setPhoneNo(props.PhoneNoValue);
        setEmailID(props.EmailIDValue);
        setPetName(props.PetNameValue);
        setBreed(props.BreedValue);
        setServices(props.ServicesValue);
    },[props.NameValue,props.IDValue,props.PhoneNoValue,props.EmailIDValue,props.PetNameValue,props.BreedValue,props.ServicesValue]);
   
    const arr = [Name,ID,PhoneNo,EmailID,PetName,Breed,Services];
   
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.NameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your Name" />
            <input defaultValue={props.IDValue} onChange={(event)=>setID(event.target.value)} class="form-control my-3" placeholder="Enter your ID" />
            <input defaultValue={props.PhoneNoValue} onChange={(event)=>setPhoneNo(event.target.value)} class="form-control my-3" placeholder="Enter your PhoneNo." />
            <input defaultValue={props.EmailIDValue} onChange={(event)=>setEmailID(event.target.value)} class="form-control my-3" placeholder="Enter your Email-ID" />
            <input defaultValue={props.PetNameValue} onChange={(event)=>setPetName(event.target.value)} class="form-control my-3" placeholder="Enter your Pet-Name" />
            <input defaultValue={props.BreedValue} onChange={(event)=>setBreed(event.target.value)} class="form-control my-3" placeholder="Enter your Pet-Breed" />
            <input defaultValue={props.ServicesValue} onChange={(event)=>setServices(event.target.value)} class="form-control my-3" placeholder="Which Services you want?" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default ConsumerForm;
