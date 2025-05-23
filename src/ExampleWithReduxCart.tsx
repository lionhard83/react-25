import { Provider, useDispatch, useSelector } from "react-redux"
import { State, store } from "./redux-products/store"
import { useEffect } from "react"
import axios from "axios"
import { Product } from "./models/Product"
import { set } from "./redux-products/productsSlice"
import favorite from './assets/favorite.svg';
import notFavorite from './assets/not-favorite.svg';
import cartPlus from './assets/cart-plus.svg';
import cartMinus from './assets/cart-minus.svg';

import { toggle } from "./redux-products/preferiteSlice"
import { add, remove } from "./redux-products/cartSlice"



export const ExampleWithReduxCart = () => {


    return (<Provider store={store}>
        <CartList />
        <ProductList />
    </Provider>)    
}

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: State) => state.products.value);
    const favorites = useSelector((state: State) => state.preferite.value);
    useEffect(() => {
        axios.get<Product[]>("https://fakestoreapi.com/products")
        .then((response) => {
            dispatch(set(response.data))
        })
    }, [])

    return (<>
        <>{favorites.length}</>
        <ul>
            {products.map(item => <li>{item.title} {item.price} 
                <button onClick={() => dispatch(toggle(item.id))}> 
                    <img src={favorites.includes(item.id) ? favorite : notFavorite} style={{height: 12}} className="logo react" alt="React logo" />
                </button>
                <button onClick={() => dispatch(remove(item))}> 
                    <img src={cartMinus} style={{height: 12}} className="logo react" alt="React logo" />
                </button>
                <button onClick={() => dispatch(add(item))}> 
                    <img src={cartPlus} style={{height: 12}} className="logo react" alt="React logo" />
                </button>
                    
                
                
                </li>)}
        </ul>
    </>)

}


const CartList = () => {

    const cart = useSelector((state: State) => state.cart.value);


    return (<>
        <p>{cart.totalPrice}</p>
        <ul>
            {cart.products.map(item => <li>{item.title} x{item.qty}</li>)}
        </ul>
    </>)
}