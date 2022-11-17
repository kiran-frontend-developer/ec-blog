import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //hooks start
  const [blogs, setBlogs] = useState(
    // [
    //   {
    //     id: 1,
    //     title: "My new Website",
    //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //     author: "lily",
    //   },
    //   {
    //     id: 2,
    //     title: "React Study",
    //     body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    //     author: "zinnia",
    //   },
    //   {
    //     id: 3,
    //     title: "Learning JavaScript",
    //     body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ",
    //     author: "Jenny",
    //   },
    // ]
    null
  );
  //   console.log(blogs)

  //useState for useEffect dependency
  const [name, setName] = useState("Initial Name");

  // Increament a number on click and then change will also dispaly vis useEffect
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      // console.log("use effect run");
      // console.log(blogs);
      // console.log(name);
      fetch("http://localhost:8000/blogs") // this full line returning a promise
        .then((res) => {
          // console.log(res);
          let response = res.json();
          console.log(response);
          return response;
        })
        .then((data) => {
          console.log(data);
          console.log(data[1]);  // array start from 0 index its mean 1 index having 2nd row
        });
      // .catch(err => console.log(err))
      // .finally(rslt => console.log(rslt))
    },
    // [name]
    []
  );

  // useEffect(() => {
  //   console.log(count);
  // }, []);

  // useEffect(() => {
  //   console.log("count: " + count + " , setCount: " + setCount);
  // }, [count]);
  //hooks end

  //methods start
  const deleteBlog = (id) => {
    // delete thn save in variable then set blogs
    // let blogsList = blogs.filter((blog) => blog.id !== id);
    // setBlogs(blogsList)

    //directly dekete and set blogs
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  //increment methhod
  const incrementNum = () => {
    setCount(count + 1);
    console.log(setCount);
    console.log(count);
  };

  //methods end

  return (
    <div className="home">
      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <p>{blog.body}</p>
        </div>
      ))} */}
      {/* <BlogList
        blogs_send={blogs}
        title="Blogs List"
        handleDelete={deleteBlog}
      />
      <BlogList
        blogs_send={blogs.filter((blog) => blog.author === "zinnia")}
        title="Zinnia's Blogs"
        handleDelete={deleteBlog}
      /> */}

      {/* button for useEffect dependency */}
      {/* <button
        onClick={() => setName("Name changed")}
        className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto my-5"
        type="button"
      >
        useEffect Dependency
      </button>
      <p>{name}</p> */}

      {/* increment button*/}
      <p>{count}</p>
      {/* <button
        type="button"
        className="btn btn-danger me-2 p-1 text-decoration-none"
        onClick={() => incrementNum()}
      >
        increment button
      </button> */}

      {/*  arithmetic operators 
                   + - * / %
       */}
      {/* logical operators   reult boolean / bool   true, false 
                   > >=   < <=  ==  value  
                    example:  1=='1'  true

                   >==    <==   ===  vlue with type , strict check 
                    example: 1 === '1' false 
       */}
    </div>
  );
};

export default Home;
