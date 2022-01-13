import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Todo from "./components/todo/Todo";
import Rick from "./components/rick/Rick";
import NotFound from "./NotFound";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/react-course" element={<App />}>
        <Route path="todo" element={<Todo />} />
        <Route path="rick" element={<Rick />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
