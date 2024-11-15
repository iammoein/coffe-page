export default function FilterButtons({ filter, setFilter }) {
  return (
    <>
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All Products
      </button>
      <button
        className={filter === "available" ? "active" : ""}
        onClick={() => setFilter("available")}
      >
        Available Now
      </button>
    </>
  );
}
