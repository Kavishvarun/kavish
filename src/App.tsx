import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 100px)' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;