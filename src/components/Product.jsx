import noneRateImg from "../assets/none-rate.png";
import RateImg from "../assets/rate.png";

export default function Product({ prop }) {
  return (
    <div className="porduct">
      <div className="product-image">
        <img src={prop.image} alt="" />
        <small className={prop.popular ? "popular" : "hidden"}>Popular</small>
      </div>
      <div className="product-name">
        <h5 className="product-title">{prop.name}</h5>
        <p className="product-price">{prop.price}</p>
      </div>

      <div className="product-info">
        <div className="product-rate">
          <img src={prop.votes > 0 ? RateImg : noneRateImg} alt="" />
          <small className="product-rating">{prop.rating}</small>
          <small className="product-vote">({prop.votes} votes)</small>
        </div>
        <small className={prop.available ? "hidden" : "product-sold-out"}>
          Sold out
        </small>
      </div>
    </div>
  );
}
