import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // to grabe the right blog id we use hook useParams
  const {} = useParams();

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
    </div>
  );
};

export default BlogDetails;
