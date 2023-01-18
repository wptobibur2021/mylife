import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
