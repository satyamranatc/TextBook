import React,{useEffect,useState} from 'react'
import "./CourseDetails.css"
export default function CourseDetails({SelectedCourse,CourseData,addCartCourses,setAddCartCourses}) {
  let [SimilarCourses,setSimilarCourses] = useState([]);

  useEffect(() => {
    let arr = CourseData.filter((e)=>e.genere == SelectedCourse.genere);
    console.log(arr);
    setSimilarCourses(arr);

  },[CourseData]);
  return (
    <div>
      <h2>{SelectedCourse.name}</h2>
      <p>{SelectedCourse.description}</p>
      <p>Instructor: {SelectedCourse.instructor}</p>
      <p>Duration: {SelectedCourse.duration}</p>
      <button>Enroll Now</button>
      <button onClick={()=>setAddCartCourses([...addCartCourses,SelectedCourse])}>Add To Cart</button>

      <hr />
      <h3>Similar Coursess</h3>
      <div id="SimilarCourses">
        {SimilarCourses.map((course, i) => (
          <div key={i} className="similarCourse">
            <img src={"https://via.placeholder.com/150"} alt={course.name} />
            <h4>{course.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
