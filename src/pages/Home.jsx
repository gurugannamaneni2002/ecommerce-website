import { products } from "../data";
import Product from "../components/Product"; 

const Home = () => {
  return (
    <div className="bg-gray-100">
    <div className="min-h-screen w-5/6 max-w-[1080px] mx-auto  pb-28 ">
      <div className="max-w-7xl mx-auto grid px-5  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
    </div>
  );
};
export default Home;
