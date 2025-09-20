import React, {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/health`)
      .then(res=>setStatus(res.data.status))
      .catch(err=>setStatus("error"));
  },[]);

  return (
    <div style={{padding:20}}>
      <h1>Telegram Admin Dashboard</h1>
      <p>API status: {status}</p>
      <button onClick={async ()=> {
        await axios.post(`${import.meta.env.VITE_API_URL}/admin/broadcast`, {text: "Hello from dashboard"});
        alert("broadcasted");
      }}>Broadcast Hello</button>
    </div>
  );
}
