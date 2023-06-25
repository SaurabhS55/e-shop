import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { productActions } from '../../store/ProductSlice';
// import product from '../../assets/Assets';
const Products = (props) => {
  // const [productItems,setProductItems]= useState([])
  const productItems =useSelector(state=>state.product.products)
  const setProductItems =useDispatch()
  useEffect(() => {
    fetch('https://ecommerce-9a3d2-default-rtdb.firebaseio.com/products.json')
    .then(response => response.json())
    .then(data => {
      const t=data.map((item) => <ProductItem key={item.id} id={item.id} title={item.name} price={item.price} img={item.image} />)
      setProductItems(productActions.setProducts(t))
    })
  }, [setProductItems])
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul style={{
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gap:'20px'
      }}>
        {productItems}
      </ul>
    </section>
  );
};

export default Products;
