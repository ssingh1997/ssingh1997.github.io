import {Star} from "@material-ui/icons"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function TimelineItem({ data }) {
    useEffect(() => {
        Aos.init({duration: 2000});
    });
    return (
        <div data-aos="fade-up" className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.text}</p>
                <div className="itemContainer">
                {/* <img src="assets/goal.png"/> */}
                <Star classname="icon" />
                </div>
                {/* <span className="circle"/> */}
            </div>
        </div>
    )
};
