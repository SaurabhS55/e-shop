import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const CartButton = (props) => {
  const [count,setCount] = useState(0)
  const cartItems = useSelector(state=>state.cart.cart)
  useEffect(()=>{
    setCount(cartItems.length)
  },[cartItems]);
  const dispatch = useDispatch()
  const clickHandler = (event) => {
    dispatch(cartActions.toggleCart(true))
  };
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
