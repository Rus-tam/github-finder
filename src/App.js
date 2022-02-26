import { BrowserRouter as Roter, Route, Routes } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Alert from './component/layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';
import { GithubProvider } from './component/context/github/GithubContext';
import { AlertProvider } from './component/context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Roter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Roter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
