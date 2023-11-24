import './common.scss';
import './reset.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Catalog from './pages/catalog/Catalog';
import Filter from './pages/filter/Filter';
import Product from './pages/product_cards/Product';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/filter' element={<Filter />}></Route>
            <Route path='/product' element={<Product />}></Route>
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
