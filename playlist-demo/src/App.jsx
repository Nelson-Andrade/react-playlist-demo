import "./App.css";
import Song from "./components/Song";

const songs = [
  {
    title: "I Saw You in a Dream",
    artist: "The Japanese House",
    albumCover:
      "https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg",
    time: "3:30",
  },
  {
    title: "I Saw You in a Dream",
    artist: "The Japanese House",
    albumCover:
      "https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg",
    time: "3:30",
  },
  {
    title: "I Saw You in a Dream",
    artist: "The Japanese House",
    albumCover:
      "https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg",
    time: "3:30",
  },
  {
    title: "I Saw You in a Dream",
    artist: "The Japanese House",
    albumCover:
      "https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg",
    time: "3:30",
  },
  {
    title: "I Saw You in a Dream",
    artist: "The Japanese House",
    albumCover:
      "https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg",
    time: "3:30",
  },
  {
    title: "I Saw You in a Dream",
    artist: "The Japanese House",
    albumCover:
      "https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg",
    time: "3:30",
  },
  {
    title: "I Saw You in a Dream",
    artist: "The Japanese House",
    albumCover:
      "https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/master/pass/JapaneseHouse_GoodAtFalling.jpg",
    time: "3:30",
  },
];

function App() {
  return (
    <div className="App">
      <div className="playlist">
        <h1>Playlist</h1>
        <div id="playlist-header">
          <div id="header-index">#</div>
          <div id="header-title">Title</div>
          <div id="header-time">Time</div>
        </div>
        {songs.map((song, index) => {
          return (
            <Song
              key={index}
              index={index + 1}
              title={song.title}
              albumCover={song.albumCover}
              artist={song.artist}
              time={song.time}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
