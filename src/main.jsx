import { createRoot } from "react-dom/client";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Card from "./FoodCard.jsx";
import "./foodcard.css";

function App() {
  return (
    <>
      <Header title="Food Fusion" subtitle="Discover Delicious Flavours" />
      <main className="main">
        <Card
          name="Spicy Tofu"
          description="A delicious and healthy tofu dish with a kick of spice."
          image="/tofu.png"
        />
        <Card
          name="Classic Burger"
          description="A juicy beef patty with fresh lettuce, tomato, and cheese."
          image="/burger.png"
        />
      </main>
      <Footer message="Bringing delicious flavours to your screen." />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);