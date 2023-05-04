import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Products from "./components/Products";



function App() {
  
  return (
    <div>
      <NavBar/>
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>
      <Cart />
    </div>
  );
}

export default App;
