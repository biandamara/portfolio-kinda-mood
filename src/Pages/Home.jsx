import React from "react";

// import components
import Navigation from "../Components/Navigation";

// import styles
import style from "../Assets/Styles/Home.module.css";

function Home() {
  return (
    <body>
      {/* Header - start */}
      <div className={`${style.header}`}>
        {/* navigation - start */}
        <Navigation />
        {/* navigation - end */}

        {/* jumbotron - start */}
        <div className={`container text-center p-4 ${style.jumbotron}`}>
          <div className="">
            <img
              className="img-fluid"
              src="https://blush.design/api/download?shareUri=lDredU02ANUQXw85&c=Hair_0%7E2d2824-0.2%7E6aa095-0.3%7E6aa095_Skin_0%7Eedb0b0-0.2%7Eedb0b0-0.3%7Ef48078&w=800&h=800&fm=png"
              alt=""
            />
            <div className="align-items-center text-white">
              <h1>Get your venture out in the wind</h1>
              <p>
                Build your brand fundamentals from the start and make it easier
                o gain traction, attract people and grow business.
              </p>
            </div>
          </div>
        </div>
        {/* jumbotron - end */}
      </div>
      {/* Header - end */}

      {/* content - brand - start */}
      <div className={`${style.brand}`}>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 p-4 align-items-center">
            <div className="col text-center">
              <h1>Who we are?</h1>
              <img
                className="img-fluid"
                src="https://blush.design/api/download?shareUri=qKdVdkT0QfClP8zJ&c=Hair_0%7E751e0d-0.3%7E751e0d_Skin_0%7Ef48078-0.3%7Ecc4937&w=800&h=800&fm=png"
                alt=""
              />
            </div>
            <div className="col">
              <p>
                At Herd, we value the uniqueness of every idea and believe that
                different doesn't mean lonely. We join founders as an agile
                brand-building team to help their young businesses grow up,
                reaching market readiness and scaling faster.
              </p>
              <button type="button" class="btn btn-primary">
                Get to know us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* content - brand - end */}
    </body>
  );
}

export default Home;
