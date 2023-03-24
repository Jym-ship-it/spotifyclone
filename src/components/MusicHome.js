import { useEffect, useState } from "react";
import "../Css/MusicHomeStyle.css";
import SampleAlbum from '../assets/images/image.png'

export default function MusicHome() {
  const [Message, setMessage] = useState("")
  useEffect(() => {
    let time = new Date();
    let currTime = time.getHours();
    if (currTime >= 0) {
      setMessage("Good morning");
    }
    if (currTime >= 12) {
      setMessage("Good afternoon");
    }
    if (currTime >= 18) {
      setMessage("Good evening");
    }
    console.log(currTime)
  }, []);

  return (
    <div className="musicHomeCon">
      <div className="GreetingsCon">
        <p>{Message}</p>
        <div className="SonginfoMainCon">
          <div className="SonginfCon">
            <img src={SampleAlbum} className="sampleAlbum"></img>
            <p>Old School Joey Bada$$ x J Dilla 90s Boom Bap Type Beat</p>
          </div>
          <div className="SonginfCon">
            <img src={SampleAlbum} className="sampleAlbum"></img>
            <p>Old School Joey Bada$$ x J Dilla 90s Boom Bap Type Beat</p>
          </div>
          <div className="SonginfCon">
            <img src={SampleAlbum} className="sampleAlbum"></img>
            <p>Old School Joey Bada$$ x J Dilla 90s Boom Bap Type Beat</p>
          </div>
          <div className="SonginfCon">
            <img src={SampleAlbum} className="sampleAlbum"></img>
            <p>Old School Joey Bada$$ x J Dilla 90s Boom Bap Type Beat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
