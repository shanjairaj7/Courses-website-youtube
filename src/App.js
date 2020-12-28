import React from "react";
import { useSelector } from "react-redux";
import Course from "./Components/Course";

import { selectCourses } from "./features/coursesSlice";

import "./styles/main.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndCourse from "./Components/IndCourse";
import AddCourse from "./Components/AddCourse";

const App = () => {
  const courses = useSelector(selectCourses);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>A Place to sell your Courses online!</h1>
          <Link to="/addcourse" className="header__button">
            Sell a Course
          </Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <div className="courses">
              {courses &&
                courses.map((course) => (
                  <Link className="link" to={`/${course.id}`}>
                    <Course data={course} />
                  </Link>
                ))}
            </div>
          </Route>
          <Route path="/addcourse">
            <AddCourse />
          </Route>
          <Route path="/:id">
            <IndCourse />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
