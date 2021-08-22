
import './Navbar.css';

const Navbar = (props) => {

    const getUsers=()=>{
        props.onClickBtn(true);
    }
    
    
    return (
        <div>
           <div  className="myNav" >
               <div className="logo">LetsGrowMore</div>
               <div>
               <button className="getUserBtn" onClick={getUsers}>Get users</button>
               
           </div>
           </div>
           
        </div>    
    );

}

export default Navbar;




// const [users, setUsers] = useState([]);


//     const getUserInfo = async () => {
//         const response = await fetch('https://reqres.in/api/users?page=1')
//         const usersData = await response.json();
//         setUsers(usersData.data);
//     }

//     useEffect(() => {
//         getUserInfo();
//     }, [])
