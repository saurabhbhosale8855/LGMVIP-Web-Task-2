import React from 'react';
export default function ShowUser({users,loadUsers, Loading}){
    console.log(typeof(users))
    return(
        <>
            <button onClick={loadUsers} className="btn">Click Me</button>
            <div className='snail'>
      
            </div>
            <div>
            {
                users.map((u)=>(

                    <div key={u.id} className="card">
                        <div className='avator'><img src={u["avatar_url"]}/></div>
                        <div className='content'>
                        <div className='name'><b>Name : </b>{u["login"]}</div>
                            <div className='name'><b>github Link : </b>{u["repos_url"]}</div> 
                            <div className='name'><b>profile Link : </b>{u["followers_url"]}</div>
                             <div className='name'><b>Follo Links : </b>{u["following_url"]}</div> 
                            <div className='name'><b>company Link : </b>{u["organizations_url"]}</div>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}