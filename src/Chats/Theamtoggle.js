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
// import React, { useState } from "react";

// const Theamtoggle = ({ course }) => {
//   const [theam, setTheam] = useState('black');

//   const handleClick = () => {
//     setTheam(theam === '#7964b1' ? 'black' : "#7964b1");
//   }

//   return (
//     <div className="taggle" style={{ backgroundColor: theam, color: 'white', padding: '20px' }}>
//       <button 
//         onClick={handleClick} 
//         style={{ borderRadius: '20px', height: '30px', width: '100px', cursor: 'pointer', marginBottom: '20px' }}
//       >
//         Theme Toggle
//       </button>

//       {/* Display Course List */}
//       <div>
//         {course && course.length > 0 ? (
//           course.map((item, index) => (
//             <div key={index} style={{ marginBottom: '10px' }}>
//               <strong>{index + 1}. {item.title}</strong><br/>
//               Category: {item.category}<br/>
//               Duration: {item.duration}<br/>
//               Fee: ${item.fee}
//             </div>
//           ))
//         ) : (
//           <p>No courses available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Theamtoggle;
