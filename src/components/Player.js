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
      <i class="fas fa-fast-backward"></i>

      <i class="fas fa-step-backward"></i>
      <i class="fas fa-play"></i>
      <i class="fas fa-step-forward"></i>
      <i class="fas fa-fast-forward"></i>
    </div>
  );
}

export default Player;
