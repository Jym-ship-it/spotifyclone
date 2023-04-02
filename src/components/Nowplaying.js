import React, { useState } from "react";
import SampleAlbum from "../assets/images/image.png";
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
import SampleAudio from "../assets/Audio/boombap.mp3";

export default function Nowplaying() {
  const [favIsClicked, setfavIsClicked] = useState("");
  const [remIsClicked, setremIsClicked] = useState("");
  const [playClicked, setplayClicked] = useState(false);
  const [shuffleClicked, setshuffleClicked] = useState("");
  const [audio] = useState(new Audio(SampleAudio));
  let Duration = 0;
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
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
  const handlePrevious = () => {
    audio.currentTime = 0;
  };
  const handlePlayClicked = () => {
    if (playClicked === false) {
      setplayClicked(true);
      audio.play();
    }
    if (playClicked === true) {
      setplayClicked(false);
      audio.pause();
    }
  };
  const handleShuffle = () => {
    setshuffleClicked(true);
    if (shuffleClicked === true) {
      setshuffleClicked(false);
    }
  };
  const handleVolume = (e) => {
  audio.volume = e.target.value/100
  };
  
  const handleProgressChange = () => {
    Duration = audio.currentTime;
    console.log(Duration);
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
            <p id="title">90s Boom Bap Type Beat</p>
            <p>Old School Joey Bada$$ x J Dilla </p>
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
                {shuffleClicked ? (
                  <ShuffleIcon style={{ color: "#1db954" }} />
                ) : (
                  <ShuffleIcon />
                )}
              </button>
              <button onClick={handlePrevious}>
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
              <p>{timeProgress}</p>
              <input
                type="range"
                min="0"
                value={Duration}
                id="myRange"
                className="nowPlayingRange"
                onChange={handleProgressChange}
              ></input>
              <p>{duration}</p>
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
              min="0"
              defaultValue={100}
              max="100"
              id="myRange"
              className="volumeSlider"
              onChange={handleVolume}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
