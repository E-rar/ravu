import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"
import { BrowserRouter} from "react-router-dom"
import  Pagerouter from './Pagerouter'
import Navigation from './components/layout/Navbar/Navbar'



const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Pagerouter/>
    </BrowserRouter>
  )
}
 
export default App;
