import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // to grabe the right blog id we use hook useParams
  const { id } = useParams(); //destructure it, for required route parameter, use id there

  //  go back to home page when click on delete button
  const history = useHistory();

  // to show data of the selected blog here , useFetch is used here
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  console.log(blog);

  // delete blog function
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
      console.log("blog deleted");
    });
  };

  return (
    <div className="blog-details">
      {/* <h2>Blog Details {id}</h2> */}

      {/* display single blog detail  */}
      {/* for this purpose we 1st check is data loading or loaded , then error check apply */}
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}

      {/* here blog details need to how . in useEffect data is null by defualt so apply check there data show only for non-null values*/}
      {blog && (
        // here return some kind of template
        <article>
          <h2>{blog.title}</h2>
          <p>Wirttern By: {blog.author}</p>
          <div>{blog.body}</div>

          {/*  delete the blog  */}
          <button
            onClick={handleDelete}
            className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
            // type="button"
          >
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
