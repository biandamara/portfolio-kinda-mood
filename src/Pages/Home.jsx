import React from "react";

// import components
import Navigation from "../Components/Navigation";

// import styles
import style from "../Assets/Styles/Home.module.css";

function Home() {
  return (
    <div className={`${style.home}`}>
      {/* Header - start */}
      <Navigation />
      {/* Header - end */}
      <h1>Hello World!</h1>
    </div>
  );
}

export default Home;
