import React, { useState } from 'react'
import Create from './Components/Create';
import Show from './Components/Show';

const App = () => {


  const [users, setusers] = useState([
    {username:"deepak",email:"deepak.mmskm@gamil.com"}
  ])

  
  
  return (
   <div>
     
      <Create users={users} setusers={setusers}/>
      <Show users={users} setusers={setusers}/>
     

   
   </div>
  )
}

export default App