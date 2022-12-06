import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // to grabe the right blog id we use hook useParams
  const { id } = useParams(); //destructure it, for required route parameter, use id there

  return (
    <div className="blog-details">
      <h2>Blog Details {id}</h2>
    </div>
  );
};

export default BlogDetails;
