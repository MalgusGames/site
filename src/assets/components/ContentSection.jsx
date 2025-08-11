import CardContainer from "./CardContainer";

export default function ContentSection({ cards }) {
  return (
    <div className="section-container" id="magic-items">
      <div className="layout-mini">
        <h2>D&D 5e Magic Items</h2>
        <p>
          Making homebrew magic items is a hobby that comes in handy when you're
          a forever DM. If you're looking to expand your loot tables, look no
          further! Feedback is always welcome so if you use one of my items at
          your table, please let me know how it goes!
        </p>
      </div>
      <CardContainer cards={cards} />
    </div>
  );
}
