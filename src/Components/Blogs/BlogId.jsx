import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { StoreBlog } from "./MainBlog";

const BlogId = () => {
  const { blog } = useContext(StoreBlog);
  const { id } = useParams();
  console.log(id);
  const data = blog[id]
  return (
    <div className='blogid'>
      <h3>{data.id + 1 + ' - '}{data.head}</h3>
      <p className="blogid-p">{data.content}</p>
    </div>
  );
};

export default BlogId;