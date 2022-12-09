import { useState } from "react";

const Create = () => {
  //handle state of input fields
  const [title, setTitle] = useState(""); //associate with input field
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("lily");

  //   submit function
  const handleSubmit = (e) => {
    // console.log("submit event");
    e.preventDefault(); //it prevent the page to refresh.

    // now need to create a blog object. it will hold all the input data from input fields.
    const blog = { title, body, author };

    // check this obj in console
    // console.log(blog);
    // console.log(title, body, author);

    // POST request, from this data to json file
    // create a fetch request
    fetch("http://localhost:8000/blogs", {
      // 2nd aerument is used to tackle the data.
      method: "POST", //type of request
      headers: { "Content-Type": "application/json" }, //this is for , content is being sent
      body: JSON.stringify(blog), // actual data we are sending with request, but we convert it first into json data
      //   no need to add id, as json server add it automatically
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      {/* Adding a new form. using of control-inputs. which deals with inpit fields. Whatever we enter into 
            the input field , is considered the change of state of that input field. */}
      <form onSubmit={handleSubmit}>
        {/* use submit event to submit form an pass a function created above */}
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title} // associate the title with value here, empty string not showing anything,
          // change of text in useState will show text init and never change, not editable

          //apply onchange event to get the change state in input and set it to the setTitle anonymous function of useState
          onChange={(e) => setTitle(e.target.value)} //access the chaneg in event as obect as e, the event target this input field and get its value. it is 2-way binding
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="lily">Lily</option>
          <option value="zinnia">Zinnia</option>
          <option value="jenny">Jenny</option>
        </select>
        <button
          //   onClick={() => {
          //     console.log("add blog is working");
          //     alert("add blog");
          //   }}
          className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
          type="submit"
        >
          Add Blog
        </button>

        {/* to check what have we entered in the input field */}
        {/* <p>Check State of Title: {title}</p>
        <p>Check State of Body: {body}</p>
        <p>Check State of Author: {author}</p> */}
      </form>
    </div>
  );
};

export default Create;
