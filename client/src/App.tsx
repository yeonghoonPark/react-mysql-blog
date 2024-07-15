import React from "react";

import { RouterProvider } from "react-router-dom";

import { router } from "./router";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
