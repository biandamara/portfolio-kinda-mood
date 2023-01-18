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
        <div className={`container text-center ${style.jumbotron}`}>
          <div className="pb-3">
            <img
              src="https://blush.design/api/download?shareUri=lDredU02ANUQXw85&c=Hair_0%7E2d2824-0.2%7E6aa095-0.3%7E6aa095_Skin_0%7Eedb0b0-0.2%7Eedb0b0-0.3%7Ef48078&w=800&h=800&fm=png"
              alt=""
            />
            <div className="row align-items-center text-white">
              <h1 className="col text-end">Get your venture out in the wind</h1>
              <p className="col">
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
          <h1>Why brand?</h1>
        </div>
      </div>
      {/* content - brand - end */}
    </body>
  );
}

export default Home;
