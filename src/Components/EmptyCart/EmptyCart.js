import './EmptyCart.css';
function EmptyCart() {
    return (
      <div className="empty-page">
        <div>
          <h1 className='cartmessage'>Your cart is empty</h1>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/person-shopping_1048-1695.jpg?size=626&ext=jpg" alt="empty-cart" />
        </div>
      </div>
    );
  }
export default EmptyCart;