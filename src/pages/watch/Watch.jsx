import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
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