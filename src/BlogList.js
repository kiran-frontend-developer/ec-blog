import React, { useState } from "react";
import { Link } from "react-router-dom";

// const BlogList = (props) => {
const BlogList = ({ blogs_send, title, handleDelete }) => {
  /* 1st method : static data
  //   const [blogs, setBlogs] = useState([
  //     {
  //       id: 1,
  //       title: "My new Website",
  //       body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //       author: "lily",
  //     },
  //     {
  //       id: 2,
  //       title: "React Study",
  //       body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
  //       author: "zinnia",
  //     },
  //     {
  //       id: 3,
  //       title: "Learning JavaScript",
  //       body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ",
  //       author: "Jenny",
  //     },
  //   ]);
  */

  /*2nd method : via props
  const access_blogs = props.blogs_send;
  //   console.log(access_blogs);

  const blogs_title = props.title;
  //   console.log(blogs_title);
  

  */

  //arrow funtion , isko humm apny button main use kr rhy hn onlick main chk kro
  // const showMessage = (e) => {
  //   // console.log(e);
  //   console.log("id: " + e);
  //   alert("hi");
  // };

  return (
    <div className="blog-list">
      {/* <h2>{blogs_title}</h2> */}
      <h2>{title}</h2>
      {/* {access_blogs.map((blog) => ( */}
      {blogs_send.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>Written by: {blog.author}</p>
          <p>{blog.body}</p>
          {/* <button
            onClick={() =>
              // {
              // console.log("id: " + blog.id);
              // alert("hi");
              // }
              // showMessage(blog.id)
              handleDelete(blog.id)
            }
            className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
            type="button"
          >
            Delete Blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
