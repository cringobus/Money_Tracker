import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Analytics from './components/Analytics/Analytics';
import Footer from './components/Footer/Footer';
import "./App.css";
import Calculator from './components/Footer/Calculator/Calculator';
import Calendar from './components/Footer/Calendar/Calendar';

const HomePage = () => {
    return (
        <>
        <Header />
    <div className='main-positions'>
      <Description />
      <Analytics />
    </div>
    <Footer />
    <div className='footer-content'>
      <h1>Spending log</h1>
      <hr />
      <div className='footer-positions'>
          <Calculator />
          <Calendar />
      </div>
    </div>
        </>
    )
}

export default HomePage