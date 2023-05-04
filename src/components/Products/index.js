import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts,fetchProducts } from "../../State/actions";
import Loader from "../Loader";
import ProductCard from "./ProductCard";


const Products=()=>{
    const products = useSelector((state) => state.products);
    const loadingState=useSelector((state) => state.loadingState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

      const productCards = products.map((product) => (
        <ProductCard
          key={Math.random()}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ));

      if(loadingState.loading){
        return <Loader/>
      }

      if(loadingState.error){
        return <div>Sorry, We're facing an error</div>
      }

      return (
        <div className="grid grid-cols-1 gap-16 justify-center mt-16 md:grid-cols-2 lg:grid-cols-3">
          {productCards}
        </div>
      ); 
}

export default Products;