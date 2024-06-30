import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter.jsx'
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/counter' element={<Counter />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<Products />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
          </Route>

        </Routes>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
