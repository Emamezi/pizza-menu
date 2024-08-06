const Pizza = ({ pizza }) => {
  const { photoName, name, ingredients, price, soldOut } = pizza;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="pizza-image" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD-OUT" : price}</span>
        <span></span>
      </div>
    </li>
  );
};
export default Pizza;
