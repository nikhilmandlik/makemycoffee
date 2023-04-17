import React, {useState} from "react";
function getValues(coffee) {
  const waterPerGram = 350 / 22;
  const water = waterPerGram * coffee;
  const firstPour = 40 / 350 * water;
  const secondPour = 150 / 350 * water;
  const thirdPour = 250 / 350 * water;

  return { water, firstPour, secondPour, thirdPour };
}
function Measurements() {
  const [coffee, setCoffee] = useState(22);
  const { water, firstPour, secondPour, thirdPour } = getValues(coffee);
  return (
    <>
      <header className="App-header">
        <h3>Coffee: <input value={coffee} onChange={(v=0) => setCoffee(parseInt(v.target.value || 0))}></input>g</h3>
        <h3>Total Water: {water.toFixed(2)}g</h3>
        <br></br>
        <h3>First Pour: {firstPour.toFixed(2)}g</h3>
        <h3>Second Pour: {secondPour.toFixed(2)}g (40Secs)</h3>
        <h3>Third Pour: {thirdPour.toFixed(2)}g (1:10Min)</h3>
        <h3>Last Pour: {water.toFixed(2)}g (1:40Min)</h3>
      </header>
      <hr></hr>
      <h2 className="header">Presets</h2>
      <div className="presets">
        <button onClick={() => setCoffee(17)}><h4>Coffee:17g</h4></button>
        <button onClick={() => setCoffee(22)}><h4>Coffee:22g</h4></button>
      </div>
      <hr></hr>
    </>
  );
}

export default Measurements;