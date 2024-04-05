import "./index.css";
import "./App.css";
import Header from "./component/Header/header.jsx";
import Hero from "./component/Hero/hero.jsx";
import Features from "./component/Features/features.jsx";
import Pricing from "./component/Pricing/pricing.jsx";
import Blog from "./component/Blog/blog.jsx";
import Team from "./component/Team/team.jsx";
import Contacts from "./component/Contact/contact.jsx";
import Footer from "./component/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <div className="frstBlock">
        <Header />
        <Hero />
      </div>
      <Features />
      <Pricing />
      <Blog />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
