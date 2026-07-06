import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import CustomCursor from './components/CustomCursor';
import PaperRain from './components/PaperRain';

function App() {
  return (
    <Router>
      <PaperRain />
      <CustomCursor />
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 100px)' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;