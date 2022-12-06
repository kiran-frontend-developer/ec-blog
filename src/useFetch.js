import { useState, useEffect } from "react";

const useFetch = (url) => {
  // const [blogs, setBlogs] = useState(
  const [data, setData] = useState(
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

  //Pending / wait / spinner needed when data is loading from server slowly
  const [isPending, setIsPending] = useState(true);

  // saving server side errors and show on browser
  const [error, setError] = useState(null);

  useEffect(
    () => {
      // console.log("use effect run");
      // console.log(blogs);
      // console.log(name);

      //apply timer for 6 sec on fetching data from server
      setTimeout(() => {
        // fetching data from server
        // fetch("http://localhost:8000/blogs") // this full line returning a promise
        fetch(url) // custom url
          // fetch("http://localhost:8000/blogss") // cgange blogs to blogss , to study errors from servre
          .then((res) => {
            //if no data return handel error
            // console.log("response from server: ", res)
            if (!res.ok) {
              throw Error("Could not fetch data from server");
            }

            let response = res.json();
            // console.log(response);
            return response;
          })
          .then((data) => {
            setError(null);

            // console.log(data); //yh sara data hy
            // console.log(data[1]); // array start from 0 index its mean 1 index having 2nd row

            // setBlogs(data);
            setData(data);

            //debugger;
            setIsPending(false);
            // debugger;
            // console.log("blogs:", blogs);
          })
          //catch block cahing any kind of network err
          .catch((err) => {
            // console.log("server side error: ", err)
            // console.log("server side error message: ", err.message)
            setIsPending(false);
            setError(err.message);
          });
        // .finally(rslt => console.log(rslt))
      }, 1000);

      // study: timer with 2 sec / 2000 msec as argument
      // setTimeout(() => console.log('chek timer'), 6000)
    },
    // [name]
    [url]
  );
  return { data, isPending, error };
};

export default useFetch;
