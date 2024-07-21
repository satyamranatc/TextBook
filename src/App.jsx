import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ^----------Components----------
import NavBar from "./Components/NavBar";
// ^----------Pages----------
import Home from "./Pages/Home/Home";
import Course from "./Pages/Courses/Course";
import Practice from "./Pages/Practice/Practice";
import Doubt from "./Pages/Doubts/Doubt";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart.jsx";
//^ -------------------------------

export default function App() {
  let [CourseData, setCourseData] = useState([
    {
      id: 1,
      genere: "Physics",
      name: "Introduction to Physics",
      description: "Discover the fundamental laws governing our universe.",
      instructor: "Dr. Wlter Levin",
      duration: "2 Month",
      image: "",
    },
    {
      id: 2,
      genere: "Chemistry",
      name: "Chemistry Essentials",
      description:
        "Explore the building blocks of matter and chemical reactions.",
      instructor: "Dr. Michael Jordan",
      duration: "1 Month",
      image: "",
    },
    {
      id: 3,
      genere: "Biology",
      name: "Biology: Life Unveiled",
      description: "Delve into the fascinating world of living organisms.",
      instructor: "Dr. Emily Thompson",
      duration: "3 Month",
      image: "",
    },
    {
      id: 4,
      genere: "Physics",
      name: "Advanced Physics",
      description: "Learn advanced topics in physics.",
      instructor: "Dr. Samuel Greene",
      duration: "4 Month",
      image: "",
    },
    {
      id: 5,
      genere: "Math",
      name: "Mathematics for Engineers",
      description: "Learn the basics of mathematics for engineers.",
      instructor: "Dr. Joseph Rutherford",
      duration: "3 Month",
      image: "",
    },
  ]);
  let [addCartCourses, setAddCartCourses] = useState([]);

  return (
    <div id="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/courses/*"
            element={
              <Course
                CourseData={CourseData}
                setCourseData={setCourseData}
                addCartCourses={addCartCourses}
                setAddCartCourses={setAddCartCourses}
              />
            }
          />
          <Route
            path="/practice"
            element={<Practice CourseData={CourseData} />}
          />
          <Route path="/doubt" element={<Doubt />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart addCartCourses={addCartCourses} />}
          />
          <Route
            path="/*"
            element={
              <div>
                <center>
                  <h1>Not Found</h1>
                </center>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
