import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCourses } from "../features/coursesSlice";

import "../styles/main.css";

const IndCourse = () => {
  const { id } = useParams();
  const courses = useSelector(selectCourses);

  console.log(courses);

  return (
    <div>
      {courses.map((course) =>
        id == course.id ? (
          "True" ? (
            <div className="ind__course">
              <h1 className="ind__course__title">{course.name}</h1>
              <span className="course__by">by {course.by}</span>
              <div>
                <p className="course__desc">
                  Description: {course.description}
                </p>
                <h1 className="ind__course__price">${course.price}</h1>
              </div>
              <h4 className="ind__course__rating">Rating {course.rating}/5</h4>
              <button className="">Buy Now!</button>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default IndCourse;
