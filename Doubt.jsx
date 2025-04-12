import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Doubt.css";

function Doubt() {
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [doubt, setDoubt] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(event)
  {
    event.preventDefault();
    let data = {
        name,
        phone,
        doubt
    };
    emailjs.send("service_123456","template_123456",data,"vTZY2Jez0q_hjGVDy")
    .then(()=>{setName("")
        setPhone("");
        setDoubt("");
        setMsg("Successfully sent!")

        setTimeout(()=>{setMsg("") }, 3000);

    })
    .catch((e)=>console.log(e));

  }

  

  return (
    <div className="container">
      <h1>Doubt Submission</h1>
      <form onSubmit={handleSubmit} className="doubt-form">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter your phone number"
          onChange={(e)=>setPhone(e.target.value)}
          value={phone}
          
          className="input-field"
        />
        <textarea
        onChange={(e)=>setDoubt(e.target.value)}
        value={doubt}
          placeholder="Enter your doubt"
          rows="3"
           className="textarea-field"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <h2 className="msg">{msg}</h2>
    </div>
  );
}

export default Doubt;