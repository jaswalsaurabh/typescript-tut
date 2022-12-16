import React, { useState } from "react";
import Product from "./components/Product";

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: "Iphone",
      price: 3000,
    },
    {
      id: 2,
      title: "Samsung Note S22",
      price: 3500,
    },
    {
      id: 3,
      title: "Nokia Lumia",
      price: 1000,
    },
    {
      id: 4,
      title: "IMac",
      price: 30000,
    },
  ]);

  function handleAddCart(id: number) {
    console.log("button clicked", id);
    let ans = products.filter((item) => item.id === id);
    console.log("ans>>", ans);
  }
  return (
    <div>
      {products.map((item) => (
        <Product product={item} key={item.id} handleCart={handleAddCart} />
      ))}
    </div>
  );
};

export default App;
