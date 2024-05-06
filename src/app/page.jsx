import Header from "./components/header/page";
import Work from "./components/work/page";
import Offer from "./components/offer/page";
import PricePlan from "./components/pricePlan/page";
import Intro from "./components/intro/page";
import Footer from "./components/footer/page";
import News from "./components/news/page";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

export default function Home() {
  return (
    <>
      <section className="">
        <div className="headerFix">
          <Header />
        </div>
        <div className="headerMain position-relative">
          <div className="container">
            <div className="container headerText col-lg-5 align-left ms-0 ms-md-5">
              <h2 className="text-4xl md:text-6xl mb-3">
                i am <br />
                <strong className="text-danger">.Professional</strong> <br />
                photographer
              </h2>

              <small className="text-uppercase py-2">
                It Seasons bearing in one years forth saying
              </small>
              <br />
              <a href="#" className="py-3">
                <button className="fs-6 border rounded-2 p-2 text-uppercase">
                  view portfolio
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="py-1 py-md-3">
          <Work />
        </div>

        <div className="py-1 py-md-3">
          <Offer />
        </div>
        <div className="py-1 py-md-3">
          <PricePlan />
        </div>
        <div className="py-1 py-md-3">
          <Intro />
        </div>

        <div className="py-1 py-md-3">
          <News />
        </div>

        <div className="pt-1 pt-md-3">
          <Footer />
        </div>
      </section>
    </>
  );
}
