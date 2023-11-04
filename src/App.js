import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import SpeakersList from './components/Speakers';
import SideAttraction from './components/SideAttraction';
import Hero from './components/Hero';
import Ticket from './components/Ticket';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Programme from './components/Programme';
import Host from './components/Host';
import Panelist from './components/Panelist';
import Theme from './components/Theme';

function App() {

  return (
    <BrowserRouter className="App">
    <>
     <Navbar />
     <Hero />
     <Ticket />
     <Host />
     <SpeakersList />
     <Panelist />
     <Ticket />
     <Programme />
     <Theme />
     <Ticket />
     <SideAttraction />
     <Ticket />
     <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;