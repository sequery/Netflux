import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import './list.scss'
import ListItem from './listItem/ListItem'

function List() {

    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    // setSlideNumber(0)

    const listRef = useRef();

    const handleClick = (type) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        
        setIsMoved(true);
        console.log(slideNumber)
        if (type === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${260 + distance}px)`;
        }
        if (type === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            if (slideNumber === 0) {
                setSlideNumber(slideNumber + 1);
            }
            listRef.current.style.transform = `translateX(${-260 + distance}px)`;
            }
        }
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" style={{ display: !isMoved && "none" }} onClick={() => handleClick("left")}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1}  />
                    <ListItem index={2}  />
                    <ListItem index={3}  />
                    <ListItem index={4}  />
                    <ListItem index={5}  />
                    <ListItem index={6}  />
                    <ListItem index={7}  />
                    <ListItem index={8}  />
                    <ListItem index={9}  />
                    <ListItem index={10}  />
                    <ListItem index={11}  />
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
