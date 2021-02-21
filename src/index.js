import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes";

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById("root")
);
