import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

/*
    Promesa -> Pendiente (Pending)
    Promesa -> Resuelta (Success   -> Guardamos los datos en un estado
    Promesa -> Rechazada (Rejected)

*/


const  Promesas = () => {
   const url="https://jsonplaceholder.typicode.com/users"

   const [ users, setUsers ] = useState([])

  const getUsers = async () => {

    try {   
        /*
        const res = await fetch(url)
        const users = await res.json()
        */
       const res = await axios.get(url)
       setUsers(res.data)

        }
    catch (err) {
        console.log(err)
    }
  }

  getUsers();

  return (
    <div>
        <h1>Promesas</h1>
        <h2>{ 
            users.map((user) => {
            return <div>
                    <h2> { user.name }</h2>
                    <h2> { user.email }</h2>
                </div>
        } )} 
        </h2>
    </div>
  )

}

export default Promesas