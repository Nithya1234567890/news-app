import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import News from './components/News';

const ProgressProvider = () => {
  const [progress, setProgress] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='news-app/' element={<Layout progress={progress}/>}>
        <Route path="" element={<News setProgress={setProgress} key="normal" pageSize={6} category="general"/>} />
        <Route path="business/" element={<News setProgress={setProgress} key="business" pageSize={6} category="business"/>}/>
        <Route path="entertainment/" element={<News setProgress={setProgress} key="entertainment" pageSize={6} category="entertainment"/>}/>
        <Route path="health/" element={<News setProgress={setProgress} key="health" pageSize={6} category="health"/>}/>
        <Route path="science/" element={<News setProgress={setProgress} key="science" pageSize={6} category="science"/>}/>
        <Route path="sports/" element={<News setProgress={setProgress} key="sports" pageSize={6} category="sports"/>}/>
        <Route path="technology/" element={<News setProgress={setProgress} key="technology" pageSize={6} category="technology"/>}/>
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <ProgressProvider />
);

reportWebVitals();
