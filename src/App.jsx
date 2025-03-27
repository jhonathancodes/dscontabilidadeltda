import Nav from './components/navbar/Nav.jsx';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Service from './components/services/Service.jsx';
import Consultation from './components/consultation/Consultation.jsx';
import Testimonial from './components/testimonial/Testimonial.jsx';
import Tittle from './components/testimonialtittle/Tittle.jsx';
import Question from './components/questions/Question.jsx';
import Footer from './components/footer/Footer.jsx';

import "./App.css";

function App() {
  return (
    <div>
        <Nav />
        <Home />
        <Header />
        <Service />
        <Consultation />
        <Tittle />
        <Testimonial />
        <Question />
        <Footer />
    </div>
  );
}

export default App;
