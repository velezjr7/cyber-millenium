import React, { useState } from "react";
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import ProductList from "./src/components/ProductList";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import { Tab } from "./types";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.INICIO);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.INICIO:
        return <Hero onCtaClick={() => setActiveTab(Tab.PRODUCTOS)} />;
      case Tab.PRODUCTOS:
        return <ProductList />;
      case Tab.CONTACTO:
        return <Contact />;
      default:
        return <Hero onCtaClick={() => setActiveTab(Tab.PRODUCTOS)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        <div className="animate-fade-in">{renderContent()}</div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
