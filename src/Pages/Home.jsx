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
        <div className={`container ${style.jumbotron}`}>
          <div className="clearfix text-white">
            <p className="col-md-6 float-md-end m-ms-1 mx-md-4 mt-md-5 pe-md-5 pe-sm-0 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h1 className="col text-end">Lorem Ipsum</h1>
            <h1 className="col text-center">
              dolor sit amet, consectetur adipiscing elit.
            </h1>
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
