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
import Home from "./Components/Home/Home";
import Registration from "./Components/ReactRouter/Registration";
import Login from "./Components/ReactRouter/Login";
import NotFound from "./Components/ReactRouter/NotFound";
import MainBlog from "./Components/Blogs/MainBlog";
import TodoRedux from "./Components/Todo/TodoRedux";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <>
      <nav>
        <ul className="navitems">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/theme">SwitchTheme</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/userform">UserForm</Link>
          </li>
          <li>
            <Link to="/fetch">Fetch</Link>
          </li>
          <li>
            <Link to="/usememo">UseMemo</Link>
          </li>

          <li>
            <Link to="/todos">Todo Redux</Link>
          </li>
          <li>
            <Link to="/*">NotFound</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/theme" element={<Switchtheme />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/usememo" element={<Usememo />} />
        <Route path="/doctitle1" element={<DocTitleOne />} />
        <Route path="/doctitle2" element={<DocTitleTwo />} />
        <Route path="/compE" element={<CompE />} />
        <Route path="/compF" element={<CompF />} />
        <Route path="/todos" element={<TodoRedux />} />
        <Route path="/blog" element={<MainBlog />} />
        <Route path="*" element={<NotFound />} />
    
      </Routes>

    </>
  );
}

export default App;
