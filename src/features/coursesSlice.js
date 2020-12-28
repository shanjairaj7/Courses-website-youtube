import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [
      {
        id: uuidv4(),
        name: "Make Money as a Developer!",
        description: "Learn to make money with Twitter",
        price: 30,
        by: "Florin pop",
        rating: 4,
      },
      {
        id: uuidv4(),
        name: "Become a better Developer",
        description: "Tips for developers",
        price: 25,
        by: "James",
        rating: 3,
      },
    ],
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses.push(action.payload);
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export const selectCourses = (state) => state.courses.courses;

export default coursesSlice.reducer;
