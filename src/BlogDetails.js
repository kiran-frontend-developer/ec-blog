import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // to grabe the right blog id we use hook useParams
  const { id } = useParams(); //destructure it, for required route parameter, use id there

  // to show data of the selected blog here , useFetch is used here
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  console.log(blog);

  return (
    <div className="blog-details">
      <h2>Blog Details {id}</h2>
    </div>
  );
};

export default BlogDetails;
