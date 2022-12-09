const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      {/* Adding a new form. using of control-inputs. which deals with inpit fields. Whatever we enter into 
            the input field , is considered the change of state of that input field. */}
      <form>
        <label>Blog Title:</label>
        <input type="text" required />
        <label>Blog Body:</label>
        <textarea required></textarea>
        <label>Blog Author:</label>
        <select>
          <option value="lily">Lily</option>
          <option value="zinnia">Zinnia</option>
          <option value="jenny">Jenny</option>
        </select>
        <button
          onClick={() => {
            console.log("add blog is working");
            alert("add blog");
          }}
          className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
          type="button"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Create;
