import React, { useState ,useEffect} from "react";

export default function Practice({ CourseData }) {
  let [CourseCategory, setCourseCategory] = useState([]);
  
  useEffect(() => {
    let arr = CourseData.map((e) => e.genere);
    setCourseCategory(arr);
  }, [CourseData]);


  return <div>
    <select name="" id="">
      <option value="">Select Course Category</option>
      {CourseCategory.map((cat, i) => (
        <option key={i} value={cat}>{cat}</option>
      ))}
    
    </select>
  </div>;
}
