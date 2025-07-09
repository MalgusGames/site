import CardContainer from "./CardContainer";

export default function ContentSection() {
  return (
    <div className="section-container" id="magic-items">
      <div className="layout-mini">
        <h2>D&D Magic Items</h2>
        <p>
          Welcome to Malgus Games, a hobby that has slowly grown into an
          obsession. Most of my work has centered around making materials and
          assets for my home games, and now I want to share that with all of
          you! So stay awhile, grab an ale, and please, have a look around!
        </p>
      </div>
      <CardContainer />
    </div>
  );
}
