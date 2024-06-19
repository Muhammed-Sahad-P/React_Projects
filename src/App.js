import "./App.css";
import Todo from "./Components/TodoApp/Todo";
import Counter from "./Components/UseReducer/Counter";
import React from "react";
import CompF from "./Components/UseContext/CompF";
import CompE from "./Components/UseContext/CompE";
import DocTitleOne from "./Components/CustomHook/DocTitleOne";
import DocTitleTwo from "./Components/CustomHook/DocTitleTwo";
import UserForm from "./Components/CustomHook/Hooks/UserForm";
import Switchtheme from "./Components/Theme/SwitchTheme";
import Fetch from "./Components/FetchDAta/Fetch";
import Usememo from "./Components/UseMemo/Usememo";
import { Link, Route, Routes } from "react-router-dom";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Todo">Todo</Link>
          </li>
          <li>
            <Link to="/Theme">SwitchTheme</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/UserForm">UserForm</Link>
          </li>
          <li>
            <Link to="/Fetch">Fetch</Link>
          </li>
          <li>
            <Link to="/Usememo">Usememo</Link>
          </li>

          <li>
            <Link to="/CompF">CompF</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Theme" element={<Switchtheme />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/Fetch" element={<Fetch />} />
        <Route path="/UseMemo" element={<Usememo />} />
        <Route path="/Doctitle1" element={<DocTitleOne />} />
        <Route path="/Doctitle2" element={<DocTitleTwo />} />
        <Route path="/CompE" element={<CompE />} />
        <Route path="/CompF" element={<CompF />} />
      </Routes>
    </>
  );
}

export default App;
