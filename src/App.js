import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarreact from './components/Navbar';
import CarouselReact from './components/Carousels';
import Cardreact from './components/Cards';
import Producthead from './components/Producthead';
import { accessories } from './data/data';
import { electronics } from './data/data';


function App() {
  return (
    <div className="App">
     <Navbarreact />
     <CarouselReact />
     <Producthead title="CLOTHES"/>
     <Cardreact prod={accessories}/>
     <Producthead title="ELECTRONICS"/>
     <Cardreact prod={electronics}/>

     
    </div>
  );
}

export default App;
