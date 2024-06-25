import React, { useContext, useState } from "react";
import { StoreBlog } from "./MainBlog";
// import { Link } from "react-router-dom";

const CreateBlogs = () => {
  const [head, setHead] = useState("");
  const [content, setContent] = useState("");
  const { blog, setBlog } = useContext(StoreBlog);

  const handleStore = () => {
    setBlog([...blog, { head, content, id: blog.length}]);
    setContent("");
    setHead("");
  };

  return (
    <div className="container">
      <div className="con-body">
        <div className="create">
          <h2>Blog App</h2>
          <label>Head: </label>
          <input
            type="text"
            value={head}
            onChange={(e) => setHead(e.target.value)}
          />
          <label>Blog: </label>
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button onClick={handleStore}>Create</button>
          {/* <Link to="blogs">
            <button>Blogs</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CreateBlogs;