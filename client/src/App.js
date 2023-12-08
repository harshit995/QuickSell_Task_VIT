import React, { useEffect, useState } from 'react';
import Group from './components/Group/Group';
import Navbar from './components/Navbar/Navbar';
import { FaExclamationTriangle, FaAdn } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FcTodoList, FcApproval, FcLowPriority, FcMediumPriority, FcHighPriority, FcCancel, FcPieChart, FcExpired, FcBusinessman, FcManager, FcServiceMark, FcLinux } from "react-icons/fc";
import './App.css';

function App() {

  return (
    <div className="App">
      <Kanban />
      <Title />
    </div>
  );
}

export default App;