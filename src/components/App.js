// import React, {Component, useState} from "react";
// import '../styles/App.css';

// const App = () => {
//   return (
//     <div id="main">
//     <h1 data-ns-test="project-name">Dream Project</h1>
//     <p data-ns-test="project-description">Project Description</p>
//     </div>
//   );
// }
// export default App;


import React, {Component, useState} from "react";
import '../styles/App.css';


const App = () => {
  const pname = "project-name";
  const pdesc = "project-description";
  return (
    <div id="main">
      <h1 data-ns-test={pname}>Memories App</h1>

      <p data-ns-test={pdesc}>
        An App to store my favourite memories of my life
      </p>
    </div>
  );
};



export default App;
