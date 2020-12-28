import React, { useState } from "react";
import { setCourses } from "../features/coursesSlice";

import "../styles/main.css";

import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddCourse = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [by, setBy] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();

  const addCourse = (e) => {
    if (
      name !== "" &&
      desc !== "" &&
      price !== 0 &&
      by !== "" &&
      rating !== ""
    ) {
      e.preventDefault();

      dispatch(
        setCourses({
          id: uuidv4(),
          name: name,
          description: desc,
          price: price,
          by: by,
          rating: rating,
        })
      );

      history.push("/");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="add__course">
      <input
        placeholder="Name of the course"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Course Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        placeholder="$$$ Price of the course"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Course creator"
        value={by}
        onChange={(e) => setBy(e.target.value)}
      />
      <input
        placeholder="Course rating (out of 5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={(e) => addCourse(e)}>Add course</button>
    </div>
  );
};

export default AddCourse;
