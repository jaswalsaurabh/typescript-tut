import { IProduct } from "../App";

interface IProdProps {
  product: IProduct;
  handleCart(id: number): void;
}
const Product = ({ product, handleCart }: IProdProps) => {
  return (
    <div>
      <p>{product.title}</p>
      <button onClick={() => handleCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
