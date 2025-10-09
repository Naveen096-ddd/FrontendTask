import React, { useState, useEffect } from "react";

const coursesData = [
  { title: "JavaScript Basics", category: "Programming", duration: 10, fee: 100 },
  { title: "Advanced CSS", category: "Design", duration: 8, fee: 80 },
  { title: "Python for Data Science", category: "Programming", duration: 15, fee: 150 },
  { title: "UX Fundamentals", category: "Design", duration: 6, fee: 70 },
];
export default function App() {
  const [category, setCategory] = useState("");
  const [maxDuration, setMaxDuration] = useState("");
  const [maxFee, setMaxFee] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [darkMode, setDarkMode] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    showToast(`Switched to ${!darkMode ? "dark" : "light"} mode`);
  };
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  };
  const filterCourses = () => {
    let results = coursesData.filter(course => {
      return (
        (category === "" || course.category.toLowerCase().includes(category.toLowerCase())) &&
        (maxDuration === "" || course.duration <= Number(maxDuration)) &&
        (maxFee === "" || course.fee <= Number(maxFee))
      );
    });

    setFilteredCourses(results);

    if (results.length === 0) {
      showToast("No courses found");
    } else {
      showToast(`${results.length} course(s) found`);
    }
  };

  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "#fff",
      color: darkMode ? "#eee" : "#000",
      minHeight: "100vh",
      padding: 20,
      fontFamily: "Arial"
    }}>
      <h1>Course Finder</h1>
      <button onClick={toggleDarkMode} style={{ marginBottom: 20 }}>
        Toggle Dark/Light Mode
      </button>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="number"
          placeholder="Max duration (hrs)"
          value={maxDuration}
          onChange={(e) => setMaxDuration(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="number"
          placeholder="Max fee ($)"
          value={maxFee}
          onChange={(e) => setMaxFee(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={filterCourses}>Search</button>
      </div>
      <div>
        {filteredCourses.map((course, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            backgroundColor: darkMode ? "#333" : "#f9f9f9"
          }}>
            <h3>{course.title}</h3>
            <p>Category: {course.category}</p>
            <p>Duration: {course.duration} hrs</p>
            <p>Fee: ${course.fee}</p>
          </div>
        ))}
      </div>
      {toastMessage && (
        <div style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "#333",
          color: "white",
          padding: "10px 20px",
          borderRadius: 5,
          opacity: 0.9
        }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
