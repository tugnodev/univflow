import React from 'react';
import "./App.css";
import SideBar from "./components/sideBar.tsx";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview.tsx';
import Timetable from './pages/Timetable.tsx';
import ExamNotes from './pages/ExamNotes.tsx';
import Notepad from './pages/Notepad.tsx';
import NavBar from "./components/navBar.tsx";

function App() {
  return (
    <Router>
      <body className={`w-full flex flex-col overflow-scroll md:flex-row h-screen bg-base-300`}>
        <SideBar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/exam-notes" element={<ExamNotes />} />
          <Route path="/notepad" element={<Notepad />} />
        </Routes>
        <NavBar />
      </body>
    </Router>
  );
}

export default App;
