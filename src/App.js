import React, { Component } from 'react';
import './App.css';
import SVGIcon from './brands-stat';
import './App.css';
import MainSection from './main-section-1';
import Example from './Nav-bar';
import Liste from './liste';
import Stats from './destinations';
import Cities from './bottom-cards';

const tab=[
  {
    title: 'for Patients',
    par: 'Find a doctor, book a visit and solve any health-related doubt',
    color: '#00ccb1',
    bool: true,
    alt: 'marketplace',
    

  },
  {
    title: 'for Doctors',
    par: 'Save time managing visits and cut no-shows by half',
    color: '#3d83df',
    bool: false,
    alt: 'saas',
  }
]

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Example />
        <MainSection />
        <Liste content={tab} />
        <div className="icons row">
          <div className="col-lg-4 svg"><h1>We are a global company <br />
            with local culture</h1></div>
          <div className="col-lg-8 svg">
            <SVGIcon name="planner1" width={"180px"} fill={"gray"} />
            <SVGIcon name="planner2" width={"180px"} fill={"gray"} />
            <SVGIcon name="planner3" width={"180px"} fill={"gray"} />
            <SVGIcon name="planner4" width={"180px"} fill={"gray"} />
            <SVGIcon name="planner5" width={"180px"} fill={"gray"} />

          </div>
        </div>
        <Stats/>
        <Cities/>



      </div>
    );
  }
}



export default App;
