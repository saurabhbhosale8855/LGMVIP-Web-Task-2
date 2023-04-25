import React,{useState} from 'react';
import ShowUser from './ShowUser';
export default function GetUser(){
    const [users,setUsers] = useState([])
    const [isLoading, setLoading] = useState(false)
    const loadUsers = async () => {
        setLoading(true)
        const response = await fetch ("https://mocki.io/v1/00589ab4-e1c9-4b8a-88ff-727b80812282")
        const responseJson = await response.json()
        setUsers(responseJson)
        setLoading(false)
    }
    return(
        <>
            <h1 className='heading'> Get Data From API? </h1>
            <ShowUser users = {users} loadUsers = {loadUsers} Loading={isLoading} />      
        </>
    )
}
