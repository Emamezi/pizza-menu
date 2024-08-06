import { pizzaData as PIZZA_DATA } from "../data";
import Pizza from "./pizza.component";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {PIZZA_DATA.map((pizza) => (
        <Pizza className="pizzas" key={pizza.name} pizza={pizza} />
      ))}
    </main>
  );
};
export default Menu;
