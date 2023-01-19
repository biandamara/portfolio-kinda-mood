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
        <div className={`container text-center p-4 pb-5 ${style.jumbotron}`}>
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

      {/* who we are? - start */}
      <div className={`${style.who}`}>
        <div className="container px-4 py-5">
          {/* box - start */}
          <div className="row row-cols-1 row-cols-lg-3 rounded-5 my-3 p-5 bg-secondary align-items-center">
            <h1 className="col text-center">Who we are?</h1>
            <p className="col">
              Wa ask uncomfortable questions, facilitate exhaustive workshops
              and draw the fundamentals out to help you follow through on your
              vision taking a leap from 0 to 1.
            </p>
            <p className="col">
              Wa ask uncomfortable questions, facilitate exhaustive workshops
              and draw the fundamentals out to help you follow through on your
              vision taking a leap from 0 to 1.
            </p>
          </div>
          {/* box - end */}

          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col text-center">
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
      {/* who we are? - end */}

      {/* what we do? - start */}
      <div className={`${style.what}`}>
        <div className="container px-4 py-5">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col text-center">
              <h1>What we do?</h1>
            </div>
            <div className="col">
              <p>
                Wa ask uncomfortable questions, facilitate exhaustive workshops
                and draw the fundamentals out to help you follow through on your
                vision taking a leap from 0 to 1.
              </p>
            </div>
          </div>

          {/* box 01 - start */}
          <div className="row row-cols-1 row-cols-lg-2 rounded-5 my-3 p-5 align-items-center bg-white">
            <img
              className="img-fluid"
              src="https://blush.design/api/download?shareUri=8JZaMmpuGq_v5vGt&c=Hair_0%7E2d2824_Skin_0%7Ef48078&w=800&h=800&fm=png"
              alt=""
            />
            <p className="col">
              Wa ask uncomfortable questions, facilitate exhaustive workshops
              and draw the fundamentals out to help you follow through on your
              vision taking a leap from 0 to 1.
            </p>
          </div>
          {/* box 01 - end */}

          {/* box 02 - start */}
          <div className="row row-cols-1 row-cols-lg-2 my-3 p-5 align-items-center">
            <p className="col">
              Wa ask uncomfortable questions, facilitate exhaustive workshops
              and draw the fundamentals out to help you follow through on your
              vision taking a leap from 0 to 1.
            </p>
            <img
              className="img-fluid"
              src="https://blush.design/api/download?shareUri=ViaEOCn6fZyShwGa&c=Hair_0%7E6aa095_Skin_0%7Ecc4937&w=800&h=800&fm=png"
              alt=""
            />
          </div>
          {/* box 02 - end */}

          {/* box 03 - start */}
          <div className="row row-cols-1 row-cols-lg-2 rounded-5 my-3 p-5 align-items-center bg-white">
            <img
              className="img-fluid"
              src="https://blush.design/api/download?shareUri=6Mjf5bCl6tbuPYNL&c=Hair_0%7Ef9cd6b-0.3%7E2d2824-0.4%7E2d2824_Skin_0%7Ecc4937-0.3%7Ef2684e-0.4%7Ef2684e&w=800&h=800&fm=png"
              alt=""
            />
            <p className="col">
              Wa ask uncomfortable questions, facilitate exhaustive workshops
              and draw the fundamentals out to help you follow through on your
              vision taking a leap from 0 to 1.
            </p>
          </div>
          {/* box 04 - end */}
        </div>
      </div>
      {/* what we do? - end */}
    </body>
  );
}

export default Home;
