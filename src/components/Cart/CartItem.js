import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
const CartItem = (props) => {
  const { title, quantity, total, price,img } = props.item;
  console.log(props.item)
  const dispatch = useDispatch()
  const minusHandler = () => {
    dispatch(cartActions.removeFromCart(props.item))
  };
  const plusHandler = () => {
    dispatch(cartActions.addToCart(props.item))
  };
  return (
    <li className={classes.item}>
      <header>
        <p style={{fontSize:'1.3rem'}}>{title}</p>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.img}>
        <img src={img} alt={title} />
      </div>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
