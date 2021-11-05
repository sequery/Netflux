import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'
import video from '../../assets/vid.mp4'

export const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video src={video} className="video" autoPlay controls progress></video>
        </div>
    )
}

export default Watch