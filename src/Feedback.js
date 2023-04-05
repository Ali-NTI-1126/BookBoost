import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './icons/bookboost.png';

function Feedback() {
  return (
      <div className="flex h-screen">
        <div className="w-20 bg-[#313e4d]">
          <ul className="flex flex-col items-center justify-center h-full">
            <li className="flex-grow mt-2.5">
              <img src={logo} alt="Logo" className="w-2/3 mx-auto" />
            </li>
          </ul>
        </div>
        <div className="w-2/4 bg-[#f8f9fa] relative">
          <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem]">
            
          </div>
        </div>
        <div className="w-full bg-[#d8dfe7]"></div>
      </div>
  );
}

export default Feedback;
