import './SectionLabel.css';

function SectionLabel (props) {
    return (
        <div className="section-name">
            <span className="section-label">{props.label}</span>
            <span className="small-dash"></span>
            <span className="small-dash"></span>
            <span className="dash-one"></span>
            <span className="small-dash"></span>
            <span className="small-dash"></span>
        </div>
    )
}

export default SectionLabel;