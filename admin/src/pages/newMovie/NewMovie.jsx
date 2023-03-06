import "./newMovie.css";

export default function NewMovie() {
  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Image</label>
          <input type="file" id="img" />
        </div>
        <div className="addMovieItem">
          <label>Title image</label>
          <input type="file" id="imgTitle" />
        </div>
        <div className="addMovieItem">
          <label>Thumbnail image</label>
          <input type="file" id="imgSm" />
        </div>
        <div className="addMovieItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" />
        </div>
        <div className="addMovieItem">
          <label>Description</label>
          <input type="text" placeholder="Description" />
        </div>
        <div className="addMovieItem">
          <label>Year</label>
          <input type="text" placeholder="Year" />
        </div>
        <div className="addMovieItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" />
        </div>
        <div className="addMovieItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" />
        </div>
        <div className="addMovieItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" />
        </div>
        <div className="addMovieItem">
          <label>Is Series</label>
          <select name="active" id="isSeries">
            <option value="false" selected>Default</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addMovieItem">
          <label>Trailer</label>
          <input type="file" />
        </div>
        <div className="addMovieItem">
          <label>Video</label>
          <input type="file" />
        </div>
        <button className="addMovieButton">Create</button>
      </form>
    </div>
  );
}
