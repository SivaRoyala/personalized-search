import React from "react";
import ToolBarComp from './ToolBarComp';
import FooterComp from './FooterComp';
import ParentComponent from './Test'
import TypesOfFood from './TypesOfFood';
import SampleComponent2 from './SampleComponent2';
import StudentRegistration from './StudentRegistration';
import StudentsList from './StudentsList';
import "./App.css";


function App() {
  return (
    <React.Fragment>
      {/* <ToolBarComp></ToolBarComp> */}
      
      {/* <FooterComp></FooterComp> */}
      {/* <ParentComponent></ParentComponent>
      <TypesOfFood />
      <SampleComponent2 /> */}



  <StudentRegistration />
  <StudentsList />
    </React.Fragment>
  );
}

export default App;
