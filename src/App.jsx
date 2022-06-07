import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Videos from "./Videos";
import "./App.css";
function App() {
  const [videos, setVideos] = useState([]);
  const [input, setInput] = useState("React");
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const getData = async function () {
      try {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${input}&key=AIzaSyBEvSDHHzrixuFPk5_X340XpZu98qeK2As`
        );
        const inputData = await res.json();
        if (!inputData.error) {
          setVideos(inputData);
        } else {
          setCheck(true);
        }
      } catch (e) {
        throw new Error(e);
      }
    };
    getData();
  }, [input]);
  return (
    <div className="App">
       <div className="search">
      <input
        onInput={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search"
      />
      <button>search</button>
    </div>
    <Videos videos={videos} check={check}/>
    </div>
  );
}

export default App;
