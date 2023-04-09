import { useState } from "react";
import "./newMovie.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function NewMovie() {
  const [movie, setMovie] = useState(null)
  const [img, setImg] = useState(null)
  const [imgTitle, setImgTitle] = useState(null)
  const [imgSm, setImgSm] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [uploaded, setUploaded] = useState(0)

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value })
  }

  // this function takes each items create a storage in firebase cloud and uploads them to the referenced storage space
  const upload = (items) => {
    items.forEach((item) => {
      const storage = getStorage();
      const metadata = {
        contentType: 'image/jpeg'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const fileName = new Date().getTime() + item.label + item.file.name
      const storageRef = ref(storage, 'images/' + fileName);
      const uploadTask = uploadBytesResumable(storageRef, item.file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => { console.log(error); },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: downloadURL }
            })
            setUploaded((prev) => prev + 1)
            console.log('File available at', downloadURL);
          });
        }
      );
    });
  }

  const handleUpload = (e) => {
    e.preventDefault()
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  console.log(movie);

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
          <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
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
        {uploaded === 5 ? (
          <button className="addMovieButton" onClick={handleSubmit}>Create</button>
        ) : (
          <button className="addMovieButton" onClick={handleUpload}>Upload</button>
        )}
      </form>
    </div>
  );
}