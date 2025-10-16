import React from "react";
import './course.css';
import { useState } from "react";
const courseList = [
  { id: 1, title: 'React Basics', category: 'Web', duration: '4 weeks', fee: 200 },
  { id: 2, title: 'UI Design', category: 'Design', duration: '6 weeks', fee: 150 },
  { id: 3, title: 'Node.js', category: 'Backend', duration: '5 weeks', fee: 250 },
  { id: 4, title: 'Python Basics', category: 'Programming', duration: '3 weeks', fee: 100 },
]
const Course= ()=>{
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [fee, setFee] = useState('');
  const [courseLists, setcourseLists] = useState(courseList);
  const [bg,setBg] = useState('#7964b1');
  const handleClick = (e) =>{
    e.preventDefault();
    console.log(title)
    const filterdata = courseList.filter(course => {
          return (
            (title === '' || course.title.toLowerCase().includes(title.toLowerCase())) &&
            (category === '' || course.category.toLowerCase().includes(category.toLowerCase())) &&
            (duration === '' || course.duration.toLowerCase() === duration.toLowerCase()) &&
            (fee === '' || course.fee === parseInt(fee))
          );
        });
    setcourseLists(filterdata);
  }
  const changebg = ()=>{
    setBg(bg === '#7964b1' ? 'lightblue' : '#7964b1');
  }
    return(
      <div><h1 style={{textAlign:'center'}}>Search/filter courses</h1><hr/>
          <div className="course" style={{ backgroundColor: bg, height: 'auto', padding: '20px',borderRadius:'20px' }}>
            <button onClick={changebg} className="search">Dark/light mode toggle</button>
            <div className="course-add">
                <input type="text"  placeholder=" CourseName" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text"  placeholder=" Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <input type="text"  placeholder=" Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                <input type="text"  placeholder=" Fee" value={fee} onChange={(e) => setFee(e.target.value)} />
                <button onClick={handleClick} className="search">Search Course</button>
              </div>
            <div className="course-list">
              {courseLists.length>0 ?
              courseLists.map((item, index) => (
                <div className="course-items" key={index}>
                  <span>{item.id}</span>
                  <span>{item.title}</span>
                  <span>{item.category}</span>
                  <span>{item.duration}</span>
                  <span>${item.fee}</span>
                </div>
              )
              ) : (
              <p>No courses found.</p>
              )}
            </div>
          </div>
       </div>
    )
}
export default Course;