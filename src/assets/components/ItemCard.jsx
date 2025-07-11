import { getItemImageURL } from "../../utils/image-util";

export default function ItemCard({ item = "placeholder" }) {
  return (
    <div className="item-card">
      <img className="item-image" src={getItemImageURL(item.image)} alt="" />
      <div className="item-content">
        <div className="item-text layout">
          <div className="layout header-subtext">
            <h3>{item.name}</h3>
            <p className="subtext">
              {item.type}, {item.rarity}
            </p>
          </div>
          <p>{item.description}...</p>
        </div>
      </div>
      <div className="item-card-ctas">
        <a href={item.link_regular} target="_blank">
          <button className="call-to-action cta-red cta-small">
            <p className="cta-text">See Details</p>
          </button>
        </a>
        <a href={item.link_bw} target="_blank">
          Print Friendly Details
        </a>
      </div>
    </div>
  );
}
