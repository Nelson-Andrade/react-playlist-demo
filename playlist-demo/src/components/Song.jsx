import React, { useState } from "react";
import "./Song.css";
import fullHeart from "../assets/white-heart.png";
import emptyHeart from "../assets/black-outline-heart.png";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";

function Song(props) {
  const [liked, setLiked] = useState(false);

  const setLikedState = () => {
    setLiked(!liked);
    console.log(liked);
  };

  return (
    <div className="song">
      <div id="sond-index">{props.index}</div>
      <img src={props.albumCover} id="album-cover" />
      <div className="song-details">
        <h3 id="song-title">{props.title}</h3>
        <p id="song-artist">{props.artist}</p>
      </div>

      {/* creating an IonIcon */}
      <IonIcon
        id="heart"
        color={liked ? "success" : "lights"}
        src={liked ? heart : heartOutline}
        onClick={setLikedState}
      ></IonIcon>

      {/* <img
        id="heart"
        src={liked ? fullHeart : emptyHeart}
        onClick={setLikedState}
      ></img> */}

      <p id="song-duration">{props.time}</p>
      <button className="play-button">Play</button>
    </div>
  );
}

export default Song;
