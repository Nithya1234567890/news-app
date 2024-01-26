import React,{useState} from "react";
import Newsnavbar from "./components/Newsnavbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
const App =()=>{
  const [progress,setProgress]=useState(0);
    return (
      <>
      <Router>
      <Newsnavbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={5}
      />
      <div className="container">
        <Routes>
            <Route exact path="/news-api" element={<News setProgress={setProgress} key="normal" pageSize={6} category="general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={6} category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={6} category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={6} category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={6} category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={6} category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={6} category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={6} category="technology"/>}/>
        </Routes>
      </div>
      </Router>
      </>
    );
  }

export default App;
