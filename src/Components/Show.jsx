import React, { useState } from 'react'

const Show = (props) => {
  const {users, setusers} = props;
  const DeleteHandler = (i)=>{
    console.log(i)

    // const copyusers =[...users]
    // copyusers.splice(i, 1);
    // setusers(copyusers);

    setusers(users.filter((e,idx)=> idx !==i));
  }
  
  return (
    <div>
      <h1>show</h1>
       <ul>
        {users.map((e,i)=> {
          return(
           <li key={i}>
            {e.username}|{e.email}
            

            <span onClick={()=>DeleteHandler(i)} >❌</span>
           </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Show