import React from "react";

function SkillStack() {
  return (
    <div className="bg-light w-100">
      <div className="container text-center py-5">
        <h1 className="font-weight-light">
          <span className="font-weight-bold py-5">Why Sangeet?</span>
        </h1>
        <div className="lead"></div>
        <div className="d-flex justify-content-around py-3">
          <div className="mx-2">
            <i class="fas fa-play-circle"></i>
            <h3>Play your favorites.</h3>
            <div className="text-justify">
              Listen to the songs you love, and discover new music and podcasts.
            </div>
          </div>
          <div className="mx-2">
            <i class="fas fa-book"></i>
            <h3>Playlists made easy.</h3>
            <div className="text-justify">
              We'll help you make playlists. Or enjoy playlists made by music
              experts.
            </div>
          </div>
          <div className="mx-2">
            <i class="fas fa-heart"></i>
            <h3>Make it yours.</h3>
            <div className="text-justify">
              Tell us what you like, and we'll recommend music for you.
            </div>
          </div>
          <div className="mx-2">
            <i class="fas fa-bolt"></i>
            <h3>Save mobile data.</h3>
            <div className="text-justify">
              To use less data when you play music, turn on Data Saver in
              Settings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillStack;
