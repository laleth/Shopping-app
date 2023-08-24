import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/Card.css"
import { useState } from 'react';
import Ratings from './Ratings';
import Cart from './Cart';

function Cardreact({prod}) {
    const[toggle,setToggle]=useState(Array(prod.length).fill(false));
    const handleevent= (index)=>{
        const newtoggle = [...toggle];
        newtoggle[index]=!newtoggle[index];
        setToggle(newtoggle);
    }

    const [productRating, setProductRating] = useState(0);

    const handleRatingChange = (newRating) => {
      setProductRating(newRating);
    };

    const [buttonClicked, setButtonClicked] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const handleAddToCart = (prodid) => {
      // const productToAdd = prod.find(product => product.id === prodid);
      // setCartItems(prevCartItems => [...prevCartItems, productToAdd]);
      setButtonClicked(true); 
    };


    // const handleRemoveFromCart = (productId) => {
    //   setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
    // };


  return (
    <div className='cards'>
    {prod.map((items => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {items.image} />
      <Card.Body>
        <Card.Title>{items.Cardtitle}</Card.Title>
        <Card.Text>
          {items.desc}

          <Ratings initialRating={productRating} onRatingChange={handleRatingChange} />
        </Card.Text>
        {/* <Button variant="primary" onClick={()=>handleevent(items.id)}>{toggle[items.id] ? "Added To Cart" : "Add To Cart"}</Button> */}
        {buttonClicked ? (
        <button disabled>Added to Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
      
      </Card.Body>
    </Card>
    )))}
    <div>
    {/* <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /> */}
    </div>
    </div>
  );
}

export default Cardreact;