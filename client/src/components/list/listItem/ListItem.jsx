import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './listItem.scss'
import video from '../../../assets/vid.mp4'


function ListItem({index}) {

    const [isHovered, setIsHovered] = useState(false);
    // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIUVn9-DYCK4QujgBJEt_gr2DZMyLOKkQbA&usqp=CAU
    const trailer = video
    return (
        <div className="listItem" style={{ left: isHovered && index * 260 + 2.5 * index - 50 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIUVn9-DYCK4QujgBJEt_gr2DZMyLOKkQbA&usqp=CAU" alt="" />
            {isHovered && (
                <>
                <video src={trailer} autoPlay={true} loop />
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className="icon" />
                        <Add className="icon" />
                        <ThumbUpAltOutlined className="icon" />
                        <ThumbDownAltOutlined className="icon" />
                        <div className="genre">Action</div>
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className="limit">+16</span>
                        <span>2019</span>
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ipsum felis, porttitor sed tortor non, hendrerit convallis ante.
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default ListItem
