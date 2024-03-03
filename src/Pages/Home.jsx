import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [kontostand, setKontostand] = useState(0);
  const [input, setInput] = useState("");

  function add() {
    setKontostand(kontostand + input);
    setInput("");
  }

  function minus() {
    if (input <= kontostand) {
      setKontostand(kontostand - input);
      setInput("");
    } else {
      window.alert("Du kannst nichts mehr abbuchen");
      setInput("");
    }
  }
  return (
    <section>
      <h1>Banana Bank</h1>
      <h4>Mein Girokonto</h4>
      <h2>{kontostand}</h2>
      <input
        type="number"
        onChange={(event) => setInput(Number(event.target.value))}
        value={input}
      />
      <div>
        <button onClick={add}>Einzahlen</button>
        <button onClick={minus}>Auszahlen</button>
      </div>
    </section>
  );
};

export default Home;
