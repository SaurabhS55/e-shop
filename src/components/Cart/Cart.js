// import Card from '../UI/Card';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
const Cart = (props) => {
  const cartItems = useSelector(state=>state.cart.cart)
  const toggleCart = useSelector(state=>state.cart.isShown)
  const dispatch = useDispatch()
  const hideCartHandler = () => {
    dispatch(cartActions.toggleCart(false))
  };
  const content=(cartItems.length>0)?cartItems.map((item) =><CartItem key={item.id} item={{ id: item.id, title: item.title, quantity: item.quantity, total: +item.total, price: +item.price ,img:item.img}} />):<h2>No carts are available</h2>
  return (
      <Modal className={classes.cart} hideCart={hideCartHandler} visible={toggleCart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          content
        }
      </ul>
    </Modal>
  );
};

export default Cart;
