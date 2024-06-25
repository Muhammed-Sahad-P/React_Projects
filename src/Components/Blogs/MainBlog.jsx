import React, { createContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateBlogs from "./CreateBlogs";
import Blogs from "./Blogs";
import BlogId from "./BlogId";
import { NavLink } from "react-router-dom";

export const StoreBlog = createContext();

const MainBlog = () => {
  const [blog, setBlog] = useState([]);
  return (
    <div>
      <div className="navbar">
        <Link to='/'><h3>Blog App</h3></Link>
        <nav>
          <NavLink className={"nav-item"} to='/'>Home</NavLink>
          <NavLink className={"nav-item"} to='/blogs'>Blogs</NavLink>
        </nav>
      </div>
      <div>
      <StoreBlog.Provider value={{ blog, setBlog }}>
        <Routes>
          <Route path="/" element={<CreateBlogs />} />
          <Route path="/home" element={<CreateBlogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogId />} />
        </Routes>
      </StoreBlog.Provider>
    </div>
    </div>
  );
};

export default MainBlog;