import { ArrowBackOutlined } from "@mui/icons-material"
import { Link, useLocation } from "react-router-dom"
import "./watch.scss"

const Watch = () => {
    const location = useLocation()
    console.log(location.movie);

    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                <Link to="/" className="link">
                    Home
                </Link>
            </div>
            <video
                className="video"
                src="https://blog.contus.com/wp-content/uploads/2022/05/vod-app.mp4"
                controls
                progress
                autoPlay
            />
        </div>
    )
}

export default Watch