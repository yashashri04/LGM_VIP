import React, {useState} from 'react';
import './GetData.css';
import Navbar from './Navbar';

const GetData = () => {
     
    let content;
    const [users,setUsers]=useState([]);
    const [loading,setLoading] = useState(false);  
    const [event,setEvent]=useState(false);

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=1')
        const usersData = await response.json();
        const Data=usersData.data;
        setUsers(Data);
        setLoading(false);
    }
    
    const DisplayResults=(clickEvent)=>{
        setEvent(clickEvent);
        setLoading(true);
    }

    if(loading===true){
        content= <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    } 
    else{
        content=<div className="row my-4">

        {
            users.map((ele) => {
                return(   
                <div className="col-10 col-md-4 py-3" key={ele.id}>
                    <div className="myCard">
                        <div className="card-img">
                              <img src={ele.avatar} alt="" />
                        </div>
                        <div className="card-info">
                            <h3 className="my-3">{ele.first_name}  {ele.last_name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum.
                            </p>
                            <em>Email : </em><span className="email">{ele.email}</span>
                        </div>
                    </div>
                </div>
                );
            })
        }

    </div>
    }
    if(event===true){
       getUsers();
    }
    

    return (
        <div className="myContainer">
            <Navbar onClickBtn={DisplayResults}></Navbar>
           
            <div className="container-fluid">
                <div className="container">
                    <h2>LetsGrowMore web development internship Task 2</h2>
                </div>
                <div className="usersContainer">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default GetData;

