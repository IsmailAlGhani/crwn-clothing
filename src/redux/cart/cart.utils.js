export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCarItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  if (existingCarItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1}
      :
      cartItem
    )
  } else {
    return [ ...cartItems, {...cartItemToAdd, quantity: 1}]
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCarItem = cartItems.filter(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCarItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 }
      :
      cartItem
    );
  }
};