import point from '../images/logo/Point.png';

const Card = (props) => {
  return (
    <div className='card'>
      <img className='card-img' src={props.imageUrl} />
      <div className='card-content'>
        <div className='card-coords'>
          <div className='card-country'>
            <img src={point} alt='point' />
            {props.location}
          </div>
          <a className='card-link' href={props.googleMapsUrl} target='_blank'>
            View on Google Maps
          </a>
        </div>
        <h2 className='card-title'>{props.title}</h2>
        <div className='card-dates'>
          <span className='card-from'>{props.startDate}</span>-
          <span className='card-to'>{props.endDate}</span>
        </div>
        <p className='card-text'>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
