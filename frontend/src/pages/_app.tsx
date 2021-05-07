import NavBar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/global.scss';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
