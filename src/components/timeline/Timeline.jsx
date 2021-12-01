import TimelineData from './TimelineData';
import TimelineItem from './TimelineItem'
import './timeline.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"



export default function Timeline() {
    useEffect(() => {
        Aos.init({duration: 2000});
    })
    return (
        <div data-aos="fade-up" className="reactTimeline">
            <h1>Satyen Singh Timeline</h1>
            <div className="timeline-container" id="timeline">
                {TimelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    )
}
