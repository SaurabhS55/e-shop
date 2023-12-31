import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
function App() {
  const toggleCart = useSelector(state=>state.cart.isShown)
  return (
    <Layout>
      {toggleCart&&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
