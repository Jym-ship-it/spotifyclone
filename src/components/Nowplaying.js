import React, { useState } from "react";
import SampleAlbum from "../assets/images/sampleAlbum.jpg";
import "../Css/NowPlayingStyle.css";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import AodIcon from "@mui/icons-material/Aod";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SpeakerGroupIcon from "@mui/icons-material/SpeakerGroup";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

export default function Nowplaying() {
  const [favIsClicked, setfavIsClicked] = useState("");
  const [remIsClicked, setremIsClicked] = useState("");
  const [playClicked, setplayClicked] = useState("");
  const [shuffleClicked, setshuffleClicked] = useState("");
  const handleFavClick = () => {
    setfavIsClicked(true);
    if (favIsClicked === true) {
      setfavIsClicked(false);
    }
  };
  const handleRemClick = () => {
    setremIsClicked(true);
    if (remIsClicked === true) {
      setremIsClicked(false);
    }
  };
  const handlePlayClicked = () => {
    setplayClicked(true);
    if (playClicked === true) {
      setplayClicked(false);
    }
  };
  const handleShuffle = () => {
    setshuffleClicked(true);
    if (shuffleClicked === true) {
      setshuffleClicked(false);
    }
  }
  return (
    <div className="mainContainer">
      <div className="subContiner">
        <div className="albumInfo">
          <img
            src={SampleAlbum}
            alt="SampleAlbum"
            className="SampleAlbum"
          ></img>
          <div className="songInfoContainer">
            <p id="title">No Longer Bound</p>
            <p>Forrest</p>
          </div>
          <div className="albumIcons">
            <button className="favButton" onClick={handleFavClick}>
              {favIsClicked ? (
                <FavoriteIcon style={{ color: "#1db954" }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </button>
            <button className="removeButton" onClick={handleRemClick}>
              {remIsClicked ? (
                <RemoveCircleIcon style={{ color: "red" }} />
              ) : (
                <RemoveCircleOutlineIcon />
              )}
            </button>
          </div>
        </div>
        <div className="nowplaying">
          <div>
            <div className="nowplayingControls">
              <button onClick={handleShuffle}>
                {shuffleClicked ? <ShuffleIcon style = {{color : "#1db954"}}/> : <ShuffleIcon/>}
              </button>
              <button>
                <SkipPreviousIcon />
              </button>
              <button onClick={handlePlayClicked}>
                {playClicked ? (
                  <PauseCircleIcon style={{ fontSize: "45px" }} />
                ) : (
                  <PlayCircleFilledWhiteIcon style={{ fontSize: "45px" }} />
                )}
              </button>
              <button>
                <SkipNextIcon />
              </button>
              <button>
                <RepeatIcon />
              </button>
            </div>
            <div className="RangePlay">
              <p>00:00</p>
              <input
                type="range"
                min="1"
                max="100"
                id="myRange"
                className="nowPlayingRange"
              ></input>
              <p>00:00</p>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="controlsSubContainer">
            <button>
              <AodIcon />
            </button>
            <button>
              <QueueMusicIcon />
            </button>
            <button>
              <SpeakerGroupIcon />
            </button>
            <button>
              <VolumeMuteIcon />
            </button>
            <input
              type="range"
              min="1"
              max="100"
              id="myRange"
              className="volumeSlider"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
