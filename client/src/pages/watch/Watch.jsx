import { ArrowBackOutlined } from "@mui/icons-material"
import { Link, useLocation } from "react-router-dom"
import "./watch.scss"

const Watch = () => {
    const location = useLocation()
    const movie = location.state.movie.video
    return (
        <div className="watch">
            <Link to="/" className="link">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video
                className="video"
                src={movie}
                controls
                progress
                autoPlay
            />
        </div>
    )
}

export default Watch