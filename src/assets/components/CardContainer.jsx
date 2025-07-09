import ItemCard from "./ItemCard";
import MagicItems from "./MagicItems.json";

export default function CardContainer() {
  return (
    <div className="card-container">
      {MagicItems.map((item, idx) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
}
