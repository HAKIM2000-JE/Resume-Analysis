import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Testimonial from '../components/Testimonial';
import Info from '../components/Info';
import ImgView from '../components/ImgView';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-light">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Testimonial />
      <Info />
      <ImgView />
      <Footer />
    </div>
  )
}
