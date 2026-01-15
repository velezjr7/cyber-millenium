import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2">Cyber Millenium &copy; {new Date().getFullYear()}</p>
        <p className="text-sm">Calle Guerrero #4, Nochistlán, Zac.</p>
      </div>
    </footer>
  );
};

export default Footer;