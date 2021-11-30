import {Person, Mail} from "@material-ui/icons"

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <div className="itemContainer">
            <Mail classname="icon" />
            </div>
            {/* <span className="circle"/> */}
        </div>
    </div>
);

export default TimelineItem;