import Icon from '@mui/material/Icon';
import './App.css';
import Front from './front/front';
import ProductCard from './product/product';
import About from './about/about';
import ContactUs from './contact/contact';
import Footer from './footer/footer';

function App() {
  return (

    <div>
      <div>
        <Front />
        <ProductCard/>
        <About/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
