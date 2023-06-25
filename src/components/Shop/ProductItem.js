// import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux'
import { cartActions } from '../../store/CartSlice';
const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, img } = props;
  const addCartHandler = () => {
    dispatch(cartActions.addToCart({
      id:props.id,
      title:props.title,
      price:+props.price.toFixed(2),
      img:props.img
    }))
  };

  return (
    <li className={classes.item}>
      <div className={classes.card}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>₹{price.toFixed(2)}</div>
        </header>
        <img className={classes.imge} src={img} style={{width:"50%"}} alt={title} />
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
