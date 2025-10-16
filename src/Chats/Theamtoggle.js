import React,{useState} from "react";
const Theamtoggle =()=>{
    const [theam,setTheam] = useState('black');
    const handleClick =()=>{
        setTheam(theam === '#7964b1' ? 'black' : "#7964b1");
    }
    return(
        <div className="taggle" style={{backgroundColor:theam,color:'white',height:'50vh'}}>
            <button onClick={handleClick} style={{borderRadius:'20px',height:'30px',width:'100px',cursor:'pointer'}}>TheamToggle</button>
        </div>
    )
}
export default Theamtoggle;