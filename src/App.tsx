import React, { useState } from "react";
import "./index.css";

type Drink = "coffee" | "tea" | "milk" | "coke" | "beer";

const prices: Record<Drink, number> = {
  coffee: 480,
  tea: 280,
  milk: 180,
  coke: 190,
  beer: 580,
};

function App() {
  const [counts, setCounts] = useState<Record<Drink, number>>({
    coffee: 0,
    tea: 0,
    milk: 0,
    coke: 0,
    beer: 0,
  });

  const handleClick = (item: Drink) => {
    setCounts((prev) => ({ ...prev, [item]: prev[item] + 1 }));
  };

  const totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
  const totalPrice = (Object.keys(counts) as Drink[]).reduce(
    (sum, drink) => sum + counts[drink] * prices[drink],
    0
  );

  return (
    <div className="container">
      <h1>Developing a café order system</h1>

      <div className="main">
        {/* LEFT: menu */}
        <div>
          {(Object.keys(prices) as Drink[]).map((drink) => (
            <div key={drink} className="item">
              <button
                id={drink}
                className="btn"
                onClick={() => handleClick(drink)}
              >
                <span>{drink.charAt(0).toUpperCase() + drink.slice(1)}</span>
                <span className="price">{prices[drink]} yen</span>
              </button>
              <div id={`${drink}-count`} className="badge">
                {counts[drink]}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: bill */}
        <div className="card">
          <h2>Your bill</h2>
          <p>
            Items ordered : <span id="count">{totalCount}</span>
          </p>
          <p>
            Total Price : <span id="price">{totalPrice}</span> yen
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
