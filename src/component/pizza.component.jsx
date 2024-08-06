const Pizza = ({ pizza }) => {
  const { photoName, name, ingredients, price } = pizza;

  return (
    <div className="pizza">
      <img src={photoName} alt="pizza-image" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};
export default Pizza;
