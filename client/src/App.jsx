import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./assets/Feed";


function App() {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  

  const getArticles = async () => {
    const res = await axios.get("http://localhost:4000/");
    setArticles(res.data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="w-full mb-4">
        <h1 className="text-center mt-10 text-5xl font-semibold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Hello Afrih...
        </h1>
        <h5 className="text-center text-2xl mt-2">Nees feed for today</h5>
        {/* netflix */}
        <div className="w-3/4 max-w-lg border mx-auto p-5 flex flex-col justify-center rounded-lg mt-2">
        <img className="bg-black py-2 px-4 rounded-md" src="https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" alt="Netflix Tech" />
        {articles.map((item, index) => (
          <Feed
            key={index}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
          />
        ))}
        </div>
      </div>
    </>
  );
}

export default App;
