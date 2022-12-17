import { useState } from 'react';
import "./App.scss";
import { JobCard } from './components/JobCard';

function App() {

  return (
    <div className="App">
      <h2>🙋‍♂️Welcome to Meestudy Careers</h2>
      <div className="jobSection">
        <JobCard />
      </div>
    </div>
  )
}

export default App
