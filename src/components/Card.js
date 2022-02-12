export default function Card(props) {
  return (
    <div className="card">
      <img src={require(`../images/${props.image}`)} alt={props.title} className="card--img"></img>
      <div className="card--content">
        <div className="card--attr">
          <img src={require("../images/marker.png")} alt="marker" className="card--marker"></img>
          <p className="card--country">{props.country.toUpperCase()}</p>
          <a href={props.url} target="_blank" rel="noopener noreferrer" className="card--url">
            View on Google Maps
          </a>
        </div>
        <h1 className="bold card--title">{props.title}</h1>
        <p className="bold card--timeline">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--details">{props.details}</p>
      </div>
    </div>
  );
}
