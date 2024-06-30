import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Themecontext } from './contexts/theme'
import Counter from './components/Counter'
import { Countercontext } from './contexts/counter'
import Products from './components/Products'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(5)

  useEffect(() => { document.body.className = theme }, [theme])

  function Toggletheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')

  }
  function Increment() {
    console.log('increment');
    setCount(count + 1)


  }
  function Decrement() {

            if (count == 0) {
                setCount(0);
            }
            else {
                setCount(count - 1);
            }
        }
  return (
    <>
      <Themecontext.Provider value={{ theme: theme, toggletheme: Toggletheme }}>
        {/* <Header theme={theme} toggletheme={Toggletheme}/> */}
        <Countercontext.Provider value={{ count: count, Increment: Increment, Decrement:Decrement }}>


          <Header />
          <Outlet />
          <ToastContainer/>
          {/* <Counter /> */}
          {/* <Products/> */}

          {/* <div>App Component</div> */}

        </Countercontext.Provider>

      </Themecontext.Provider>


    </>
  )
}


// another method of fun  
// arrow fun

// const App = () => {
//   return(
//     <div>App new</div>
//   )
// }
export default App
