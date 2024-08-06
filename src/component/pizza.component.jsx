const Pizza = ({ pizza }) => {
  const { photoName, name, ingredients, price } = pizza;

  return (
    <li className="pizza">
      <img src={photoName} alt="pizza-image" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
        <span></span>
      </div>
    </li>
  );
};
export default Pizza;
