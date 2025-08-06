export default function ReferenceCard({ ally }) {
  return (
    <div className="item-card">
      <div className="item-content">
        <div className="item-text layout">
          <div className="layout header-subtext">
            <h3>{ally.name}</h3>
            <p className="subtext">{ally.subtext}</p>
          </div>
          <p>{ally.description}</p>
        </div>
      </div>
      <div className="item-card-ctas">
        <a href={ally.site} target="_blank">
          <button className="call-to-action cta-red cta-small">
            <p className="cta-text">Learn More</p>
          </button>
        </a>
      </div>
    </div>
  );
}
