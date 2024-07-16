import Head from "next/head";
import { useState } from "react";



export default function Contact (){
   const [name, setname] = useState('')
   const [email, setemail] = useState('')
   const [phone, setphone] = useState('')
   const [desc, setdesc] = useState('')

   const submitHandler=(e)=>{
    e.preventDefault()
    console.log(name, phone, email, desc)
    const data = {name, phone, email, desc}
    fetch('http://localhost:3000/api/postcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
            body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(data => {
        console.log('success', data)
        alert("Thanks For Contacting Us")
      })
      .catch((error) =>{
        console.log(error, "Error")
      })
}



   const handleChange=(e)=>{
    if(e.target.name == "phone"){
        setphone(e.target.value)
    } else if(e.target.name == "name"){
        setname(e.target.value)
    }
    else if(e.target.name == "email"){
        setemail(e.target.value)
    }
    else if(e.target.name == "desc"){
        setdesc(e.target.value)
    }
    console.log(e , "changed")
}
    return(
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
  
        </Head>
        <form onSubmit={submitHandler}>
        <div  class="mb-3 container"><div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
        <input type="name" className="form-control" onChange={handleChange} name="name" value={name} id="name" placeholder="Enter Your Name"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Enter Your Email</label>
        <input type="email" className="form-control" onChange={handleChange} name="email" value={email} id="email" placeholder="Enter Your Email"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Enter Your Phone Number</label>
        <input type="phone" className="form-control" onChange={handleChange} name="phone" value={phone} id="phone" placeholder="Enter Your Phone Number"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Write your query</label>
        <textarea className="form-control" onChange={handleChange} type="desc" id="desc" name="desc" value={desc} rows="3"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      </form>
      </>
    )
}