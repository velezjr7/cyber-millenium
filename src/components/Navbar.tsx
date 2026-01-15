import React from "react";
import { Tab } from "../../types";
import logo from "../assets/logo/logo.png";

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const getButtonClass = (tabName: Tab) => {
    const baseClass =
      "px-4 py-2 font-medium transition-colors duration-200 rounded-md";
    return activeTab === tabName
      ? `${baseClass} bg-cyber-600 text-white shadow-md`
      : `${baseClass} text-cyber-100 hover:text-white hover:bg-cyber-800`;
  };

  return (
    <nav className="bg-cyber-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y Nombre */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveTab(Tab.INICIO)}>
            <div className="bg-white p-1 rounded-full flex items-center justify-center overflow-hidden h-10 w-10">
              <img
                src={logo}
                alt="Logo Cyber Millenium"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-white text-xl font-bold tracking-wider">
              CYBER MILLENIUM
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => setActiveTab(Tab.INICIO)}
                className={getButtonClass(Tab.INICIO)}>
                Inicio
              </button>
              <button
                onClick={() => setActiveTab(Tab.PRODUCTOS)}
                className={getButtonClass(Tab.PRODUCTOS)}>
                Productos
              </button>
              <button
                onClick={() => setActiveTab(Tab.CONTACTO)}
                className={getButtonClass(Tab.CONTACTO)}>
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex justify-around bg-cyber-800 p-2">
        <button
          onClick={() => setActiveTab(Tab.INICIO)}
          className={`text-sm ${
            activeTab === Tab.INICIO ? "text-white font-bold" : "text-cyber-200"
          }`}>
          Inicio
        </button>
        <button
          onClick={() => setActiveTab(Tab.PRODUCTOS)}
          className={`text-sm ${
            activeTab === Tab.PRODUCTOS
              ? "text-white font-bold"
              : "text-cyber-200"
          }`}>
          Productos
        </button>
        <button
          onClick={() => setActiveTab(Tab.CONTACTO)}
          className={`text-sm ${
            activeTab === Tab.CONTACTO
              ? "text-white font-bold"
              : "text-cyber-200"
          }`}>
          Contacto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
