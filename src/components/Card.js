import point from '../images/logo/Point.png';

const Card = () => {
  return (
    <div className='card'>
      <img
        className='card-img'
        src='https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      />
      <div className='card-content'>
        <div className='card-coords'>
          <div className='card-country'>
            <img src={point} alt='point' />
            Japan
          </div>
          <a className='card-link' href='#'>
            View on Google Maps
          </a>
        </div>
        <h2 className='card-title'>Mount Fuji</h2>
        <div className='card-dates'>
          <span className='card-from'>12 Jan, 2021</span>-
          <span className='card-to'>24 Jan, 2021</span>
        </div>
        <p className='card-text'>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
};

export default Card;
