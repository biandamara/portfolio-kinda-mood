import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Card() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
    },
  };

  return (
    <Carousel
      itemClass="pe-3"
      responsive={responsive}
      swipeable={true}
      infinite={true}
      // centerMode={true}
      focusOnSelect={true}
      // showDots={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {/* card 01 - start */}
      <div class="card">
        <img
          src="https://blush.design/api/download?shareUri=6Mjf5bCl6tbuPYNL&c=Hair_0%7Ef9cd6b-0.3%7E2d2824-0.4%7E2d2824_Skin_0%7Ecc4937-0.3%7Ef2684e-0.4%7Ef2684e&w=800&h=800&fm=png"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Card title 01</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      {/* card 01 - end */}

      {/* card 02 - start */}
      <div class="card">
        <img
          src="https://blush.design/api/download?shareUri=6Mjf5bCl6tbuPYNL&c=Hair_0%7Ef9cd6b-0.3%7E2d2824-0.4%7E2d2824_Skin_0%7Ecc4937-0.3%7Ef2684e-0.4%7Ef2684e&w=800&h=800&fm=png"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Card title 02</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      {/* card 02 - end */}

      {/* card 03 - start */}
      <div class="card">
        <img
          src="https://blush.design/api/download?shareUri=6Mjf5bCl6tbuPYNL&c=Hair_0%7Ef9cd6b-0.3%7E2d2824-0.4%7E2d2824_Skin_0%7Ecc4937-0.3%7Ef2684e-0.4%7Ef2684e&w=800&h=800&fm=png"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Card title 03</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      {/* card 03 - end */}

      {/* card 04 - start */}
      <div class="card">
        <img
          src="https://blush.design/api/download?shareUri=6Mjf5bCl6tbuPYNL&c=Hair_0%7Ef9cd6b-0.3%7E2d2824-0.4%7E2d2824_Skin_0%7Ecc4937-0.3%7Ef2684e-0.4%7Ef2684e&w=800&h=800&fm=png"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Card title 04</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      {/* card 04 - end */}

      {/* card 05 - start */}
      <div class="card">
        <img
          src="https://blush.design/api/download?shareUri=6Mjf5bCl6tbuPYNL&c=Hair_0%7Ef9cd6b-0.3%7E2d2824-0.4%7E2d2824_Skin_0%7Ecc4937-0.3%7Ef2684e-0.4%7Ef2684e&w=800&h=800&fm=png"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Card title 05</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      {/* card 05 - end */}
    </Carousel>
  );
}

export default Card;
