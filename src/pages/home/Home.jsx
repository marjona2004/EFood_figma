import { Navbar, Faq, Hero, Know, Restaran, Phone, Infarmation, Footer } from "../../components/pages/home-components";

export const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Faq />
      <Know/>
      <Restaran/>
      <Phone/>
      <Infarmation/>
       <Footer/>
    </div>
  );
};
