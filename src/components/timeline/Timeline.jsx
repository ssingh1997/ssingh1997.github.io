import TimelineData from './TimelineData';
import TimelineItem from './TimelineItem'
import './timeline.scss'



export default function Timeline() {
    return (
        <div className="reactTimeline">
            <h1>Satyen Singh Timeline</h1>
            <div className="timeline-container" id="timeline">
                {TimelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    )
}
