import './App.css';
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navbar/Navigation';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import ServiceHeader from './Components/Services/ServiceHeader';
import Services from './Components/Services/Services';
import Add from './Components/Add/Add';
import { Route, Routes } from 'react-router-dom';
import PopUnder from './Components/Add/PopUnder/PopUnder';
import BannerAdd from './Components/Add/BannerAD/BannerAdd';
import Native from './Components/Add/Native/Native';
import Skim from './Components/Add/Skim/Skim';
import AboutUs from './Components/AboutUs/AboutUs';
import Testimonial from './Components/Slider/Testimonial';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='App'>

      <Header></Header>
      <Navigation></Navigation>
      <HomeBanner></HomeBanner>
      <ServiceHeader></ServiceHeader>
      <Services></Services>
      <Add></Add>
      <Routes>
        <Route path='/pop' element={<PopUnder />}></Route>
        <Route path='/bannerAdd' element={<BannerAdd />}></Route>
        <Route path='/native' element={<Native />}></Route>
        <Route path='/skim' element={<Skim />}></Route>
        <Route path='/' element={<PopUnder />}></Route>
      </Routes>
      <AboutUs></AboutUs>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
