import './index.css';
import './App.css';
import Header from './components/Header';
import Jobs from './components/Jobs';
import Categories from './components/Categories';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
     <Jobs />
     <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
