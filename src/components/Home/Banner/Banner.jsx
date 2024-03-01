import "./Banner.scss";
import Bannerimg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco labo
          </p>
          <div className="ctas">
            {/* cta call to action == ctas */}
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img  className = "banner-img" src={Bannerimg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
