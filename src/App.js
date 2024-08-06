import React from "react";
import Menu from "./component/menu.component";
import Header from "./component/header.component";
import Footer from "./component/footer.component";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
