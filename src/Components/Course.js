import React from "react";
import "../styles/main.css";

const Course = ({ data }) => {
  return (
    <div className="course">
      <div>
        <h1 className="course__title">{data.name}</h1>
        <p className="course__desc">{data.description}</p>
      </div>
      <div>
        <h3 className="course__price">${data.price}</h3>
        <h3 className="course__by">by {data.by}</h3>
        <p className="course__rating">Rating {data.rating}/5</p>
      </div>
    </div>
  );
};

export default Course;
