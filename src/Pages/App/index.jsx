import { useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoopingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../Myorders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/Navbar'
import Formulario from '../../components/Formulario/Formulario'
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-cccount', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/My-orders', element: <MyOrders />},
    {path: '../../components/Formulario', element: <Formulario />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},
  ])
  return routes
}

function App() {

  return (
    <>
    <ShoopingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoopingCartProvider>
    </>
  )
}

export default App
