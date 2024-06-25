import React, { useContext } from "react";
import { StoreBlog } from "./MainBlog";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const { blog } = useContext(StoreBlog);

  const navigate = useNavigate();
  return (
    <>
      <h1 className="blogs-head">Blogs List</h1>
      <div className="blog-con">
        {blog.map((item) => (
          <div key={item.id} className="blog-page">
            <h3>
              {item.id + 1 + " - "}
              {item.head}
            </h3>
            <p>{item.content}</p>
            <button
              className="blogs-button"
              onClick={() => navigate(`${item.id}`)}
            >
              Read Blog...
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;