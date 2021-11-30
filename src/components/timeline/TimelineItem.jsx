import {Star} from "@material-ui/icons"

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
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
);

export default TimelineItem;