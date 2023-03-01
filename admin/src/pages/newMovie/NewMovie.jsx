import "./newMovie.css";

export default function NewMovie() {
  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addMovieItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addMovieItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addMovieItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addMovieButton">Create</button>
      </form>
    </div>
  );
}
