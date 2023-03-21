import React from "react";
import "../Css/LibraryStyle.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SampleAlbum from "../assets/images/sampleAlbum.jpg";

export default function Library() {
  return (
    <div className="libraryCon">
      <div style={{ margin: "0 10px" }}>
        <div className="titleCon">
          <button>
            <LibraryBooksIcon
              style={{ fontSize: "28px", marginRight: "20px" }}
            />
          </button>
          <p>Your Library</p>
        </div>
        <div className="musicTools">
            <button>Playlist</button>
            <button>Podcast & Shows</button>
            <button>Artist</button>
        </div>
        <div className="PlaylistCon">
          <img
            src={SampleAlbum}
            alt="SampleAlbum"
            className="SampleAlbumPlaylist"
          ></img>
          <div className="songInfoContainer">
            <p id="title">No Longer Bound</p>
            <p>Forrest</p>
          </div>
        </div>
      </div>
    </div>
  );
}
