import React from "react";

function Player() {
  return (
    <div id="rain" className="text-center">
      <div class="player-ctn">
        <div class="infos-ctn" id="sap">
          O:2O - 4:18
        </div>
        <div id="myProgress">
          <div className="text-center" id="myBar"></div>
        </div>
      </div>
      <div class="col-md-12 text-center mt-5">
        <div class="btn-group">
          <button type="button" class="btn btn-dark">
            <i class="fas fa-fast-backward"></i>
          </button>
          <button type="button" class="btn btn-dark">
            <i class="fas fa-backward"></i>
          </button>
          <button type="button" class="btn btn-dark">
            <i class="fas fa-pause-circle"></i>
          </button>
          <button type="button" class="btn btn-dark">
            <i class="fas fa-play-circle"></i>
          </button>
          <button type="button" class="btn btn-dark">
            <i class="fas fa-forward"></i>
          </button>
          <button type="button" class="btn btn-dark">
            <i class="fas fa-fast-forward"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
