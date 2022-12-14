
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'       
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {browserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from "./CartContext/CartContext"
import Cart from './components/Cart/cart'
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <div className="App">

      <browserRouter>
        <CartProvider>
         <Navbar />

         <Routes>
          < Route path = '/' element= {<ItemListContainer/>} />
          < Route path ='/category/:categoryId' element={<ItemListContainer />} />
          < Route path = '/detail/:productId' element= {<ItemDetailContainer/>}/>
          < Route path= '/cart' element={<Cart/>}/>
          < Route path='/checkout' element={<Checkout />}/> 
          < Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        



        </CartProvider>

      
      
      
      
      </browserRouter> 
    </div>
  );
}

export default App;
