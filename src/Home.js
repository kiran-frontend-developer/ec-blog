import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My new Website",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "lily",
    },
    {
      id: 2,
      title: "React Study",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
      author: "zinnia",
    },
    {
      id: 3,
      title: "Learning JavaScript",
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ",
      author: "Jenny",
    },
  ]);
//   console.log(blogs)

  return (
    <div className="home">
      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <p>{blog.body}</p>
        </div>
      ))} */}
      <BlogList blogs_send={blogs} title = "Blogs List"/>
    </div>
  );
};

export default Home;
