const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00 . Visit us or order online </p>
          <button className="btn">Order Online</button>
        </div>
      ) : (
        <p>Currently Closed. We open again at {openHour}:00</p>
      )}
    </footer>
  );
};

export default Footer;
