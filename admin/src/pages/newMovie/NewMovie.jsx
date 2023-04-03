import { useState } from "react";
import "./newMovie.css";

export default function NewMovie() {
  const [movie, setMovie] = useState(null)
  const [img, setImg] = useState(null)
  const [imageTitle, setImageTitle] = useState(null)
  const [imgSm, setImgSm] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value })
  }

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])} />
        </div>
        <div className="addMovieItem">
          <label>Title image</label>
          <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => setImageTitle(e.target.files[0])} />
        </div>
        <div className="addMovieItem">
          <label>Thumbnail image</label>
          <input type="file" id="imgSm" name="imgSm" onChange={(e) => setImgSm(e.target.files[0])} />
        </div>
        <div className="addMovieItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Description</label>
          <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name="year" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="duration" />
        </div>
        <div className="addMovieItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name="limit" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Is Series</label>
          <select id="isSeries" name="isSeries" onChange={handleChange}>
            <option value="false" defaultValue>Default</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addMovieItem">
          <label>Trailer</label>
          <input type="file" name="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
        </div>
        <div className="addMovieItem">
          <label>Video</label>
          <input type="file" name="video" onChange={(e) => setVideo(e.target.files[0])} />
        </div>
        <button className="addMovieButton">Create</button>
      </form>
    </div>
  );
}