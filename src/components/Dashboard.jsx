// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/pod_club_brand-removebg-preview.png";
import { LayoutDashboard, Users, BarChart, Star, Award, HammerIcon, Gamepad, Trophy } from "lucide-react";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-start justify-start p-6 text-pryClr bg-mainClr max-w-[800]px font-pryFF sm:w-64">
        <div className="mb-4 w-fit h-fit">
            <img className="w-20 h-16" src={Logo} alt="stat-logo" />      
        </div>
        <ul className="w-full space-y-5">
        <li>
          <Link
            to="/"
            className="flex items-center justify-start gap-2 p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
          >
            <LayoutDashboard className="text-lg" />
            <span>Dashboard</span>
          </Link>
        </li>
        
        <li>
          <Link
            to="/teams"
            className="flex items-center justify-start gap-2 p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
            >
            <Users className="text-lg" />       
            <span>Teams</span>
          </Link>
        </li>
              
        <li>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-start w-full gap-2 p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
            >
            <Trophy className="text-lg" />         
            <span>Leagues</span>
          </button>
          {isOpen && (
            <ul className="absolute z-10 flex flex-col items-start justify-center w-48 p-1 mt-2 space-y-2 bg-white rounded-lg shadow-lg font-pryFF">
              <li>
                <Link
                  to="/epl"
                  className="flex justify-center w-full p-2 transition-colors duration-300 rounded-lg items-left px-9 hover:bg-hoverClr hover:text-mainClr"
                >
                  Premier League
                </Link>
              </li>
              <li>
                <Link
                  to="/nba"
                  className="flex items-center justify-start w-full p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
                >
                  Basketball
                </Link>
              </li>
              <li>
                <Link
                  to="/nfl"
                  className="flex items-center justify-start w-full p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
                >
                  Football League
                </Link>
              </li>
              <li>
                <Link
                  to="/mlb"
                  className="flex items-center justify-start w-full p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
                >
                  Baseball League
                </Link>
              </li>
            </ul>
          )}
        </li>
              
        <li>
          <Link
            to="/players"
            className="flex items-center justify-start gap-2 p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
            >
            <Star className="text-lg" />          
            <span>Players</span>
          </Link>
        </li>      

        <li>
          <Link
            to="/matches"
            className="flex items-center justify-start gap-2 p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
            >
            <Gamepad className="text-lg" />          
            <span>Matches</span>
          </Link>
        </li>      
            
        <li>
          <Link
            to="/standings"
            className="flex items-center justify-start gap-2 p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
          >
            <Award className="text-lg" />
            <span>Standings</span>
          </Link>
        </li>
        
        <li>
          <Link
            to="/stats"
            className="flex items-center justify-start gap-2 p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
            >
            <BarChart className="text-lg" />          
            <span>Stats</span>
          </Link>
        </li>
               
        <li>
          <Link
            to="/settings"
            className="flex items-center justify-start gap-2 p-2 transition-colors duration-300 rounded-lg hover:bg-hoverClr hover:text-mainClr"
            >
            <HammerIcon className="text-lg" />          
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
