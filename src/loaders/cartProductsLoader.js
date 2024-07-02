import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async()=>{
    const loadedProducts = await fetch ( 'products.json');
    const products = await loadedProducts.json();

    //if cart data stays in database, you have to use async await
    const storedCart =getShoppingCart();
    const savedCart = [];

    // for in loop : object  || for of loop: array
    for (const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity =quantity;
            savedCart.push(addedProduct);
        }
    }
    // if you need to sent two things -> -> return [products, savedCart] or another option
    // return{products, cart: saveCart} as object
    
    return savedCart;
}

export default cartProductsLoader;