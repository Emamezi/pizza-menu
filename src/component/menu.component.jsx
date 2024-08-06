import { pizzaData as PIZZA_DATA } from "../data";
import Pizza from "./pizza.component";

const Menu = () => {
  const numPizzas = PIZZA_DATA.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {PIZZA_DATA.map((pizza) => (
            <Pizza key={pizza.name} pizza={pizza} />
          ))}
        </ul>
      ) : (
        <p>We are still working on Menu. Please check us later</p>
      )}
    </main>
  );
};
export default Menu;
