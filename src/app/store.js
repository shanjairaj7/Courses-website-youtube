import { configureStore } from "@reduxjs/toolkit";

import coursesReducer from "../features/coursesSlice";

export default configureStore({
  reducer: {
    courses: coursesReducer,
  },
});
