import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import { useRef, useState } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"

const List = () => {

    const [slideNumber, setSlideNumber] = useState()

    const listRef = useRef()    //ref hook is used in react instead of the plain js function like get element by id

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50  //between the listItem and the x axis
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translate(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translate(${-230 + distance}px)`
        }
    }
    return (
        <div className="list">
            <span className="listTitle">Continue Watching</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List