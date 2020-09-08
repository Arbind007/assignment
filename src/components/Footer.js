import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
          <h2 className="text-light">Buy Premium Now</h2>
          <button className="btn btn-outline-light btl-lg">BUY</button>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pd-3">More Links</h5>
            <Link to="/contact" className="text-light d-block">
              Contact Us
            </Link>
            <a href="#" className="text-light d-block"></a>
            <a href="#" className="text-light d-block"></a>
            <Link to="/" className="text-light d-block">
              Help
            </Link>
            <Link to="/" className="text-light d-block">
              Download
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            Sangeet is a digital music, podcast, and video streaming service
            that gives you access to millions of songs and other content from
            artists all over the world. Basic functions such as playing music
            are totally free, but you can also choose to upgrade to Spotify
            Premium.
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pd-3">Social</h5>

            <a
              href="https://www.instagram.com/spotify/"
              className="text-light d-block h1"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.youtube.com/user/spotify"
              className="text-light d-block h1"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/SpotifyIndia"
              className="text-light d-block h1"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="text-muted py-3">
          <p>Copyright © Sangeet 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
