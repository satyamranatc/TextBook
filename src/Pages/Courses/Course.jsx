import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./Course.css";

import CourseCard from "./CourseCard.jsx";
import CourseDetails from "./CourseDetails.jsx";

export default function Course({
  CourseData,
  setCourseData,
  addCartCourses,
  setAddCartCourses,
}) {
  // Making course data:

  let [SelectedCourse, setSelectedCourse] = useState("");

  return (
    <div id="CourseCardContainer">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="CourseBanner">
                <h2>Featured Courses</h2>
              </div>
              <div id="CourseList">
                {CourseData.map((Cd, i) => (
                  <CourseCard
                    key={i}
                    CourseDetails={Cd}
                    setSelectedCourse={setSelectedCourse}
                  />
                ))}
              </div>
            </>
          }
        />
        <Route
          path="CourseDetails"
          element={
            <CourseDetails
              SelectedCourse={SelectedCourse}
              CourseData={CourseData}
              addCartCourses={addCartCourses}
              setAddCartCourses={setAddCartCourses}
            />
          }
        />
      </Routes>
    </div>
  );
}
