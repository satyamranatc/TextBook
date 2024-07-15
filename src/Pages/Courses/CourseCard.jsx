import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ CourseDetails,setSelectedCourse }) {
  console.log(CourseDetails);
  return (
    <Link onClick={() => setSelectedCourse(CourseDetails)} to={"CourseDetails"}>
      <div className="CourseCard">
        <img src={"https://placehold.co/600x400"} alt={CourseDetails.name} />
        <h3>{CourseDetails.name}</h3>
        <p>{CourseDetails.description}</p>
        <p>Instructor: {CourseDetails.instructor}</p>
        <p>Duration: {CourseDetails.duration}</p>
  
      </div>
    </Link>
  );
}
