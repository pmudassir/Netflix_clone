import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./listitem.scss"

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWRmYzcwYWQzZGEyY2MyNjdjNDVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njg2OTU0NCwiZXhwIjoxNjc3MzAxNTQ0fQ.chSWsa2tFXnc1Vn3WjaOxv-ItjhOkq9q-S3xw4pRm0s"
          }
        })
        setMovie(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getMovie()
  }, [item])

  return (
    <Link to="/watch" state={{ movie: movie }}>
      {/* passing props through link */}
      <div
        className="listItems"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} //calculations to adjust hover
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
                {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default ListItem