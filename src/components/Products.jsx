import { useEffect, useState, useRef } from "react";

import Product from "./Product.jsx";
import FilterButtons from "./FilterButtons.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [animate, setAnimate] = useState(false);
  const isFetched = useRef(false);

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    const fetchData = async function () {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);

    setAnimate(true);

    setTimeout(() => setAnimate(false), 500);
  };

  const filteredProducts =
    filter === "available"
      ? products.filter((product) => product.available)
      : products;

  return (
    <>
      <div className="buttons">
        <FilterButtons filter={filter} setFilter={handleFilterChange} />
      </div>
      <div className={`products ${animate ? "animated" : ""}`}>
        {filteredProducts?.map((product) => (
          <Product key={product.id} prop={product} />
        ))}
      </div>
    </>
  );
}
