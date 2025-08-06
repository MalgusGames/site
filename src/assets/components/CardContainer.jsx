import ItemCard from "./ItemCard";

export default function CardContainer({ cards }) {
  return (
    <div className="card-container">
      {cards.map((item, idx) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
}
