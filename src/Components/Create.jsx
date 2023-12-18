import React, { useState } from 'react'

const Create = (props) => {
  const {users, setusers} = props;

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");

  const submithandler =(event)=>{
    event.preventDefault();
    const user ={username,email}
    // const copyusers =[...users]
    // copyusers.push(user);
    // setusers(copyusers);
    setusers([...users,user])
    // console.log(users);
    setusername("")
    setemail("")

  };
  
  return (
    <div>
      <h1>Create</h1>
   <form onSubmit={submithandler}>
        <input onChange={(e) => setusername(e.target.value)}
        value={username}
        type="text"
        placeholder='username'/>
        <input onChange={(e) => setemail(e.target.value)}
        value={email}
        type="text"
        placeholder='email' />
      <button>submit</button>
      </form>
     
    </div>
  )
}

export default Create