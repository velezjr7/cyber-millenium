import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Contáctanos</h2>
        <p className="mt-4 text-lg text-slate-600">Estamos listos para atenderte en cualquier momento.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info Cards */}
        <div className="space-y-6">
            
          {/* Location */}
          <div className="bg-white rounded-xl shadow-sm border border-cyber-100 p-6 flex items-start space-x-4">
            <div className="bg-cyber-100 p-3 rounded-lg text-cyber-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Visítanos</h3>
              <p className="text-slate-600 mt-1">
                Calle Guerrero #4<br />
                Nochistlán, Zacatecas
              </p>
            </div>
          </div>

          {/* Phone / WA */}
          <div className="bg-white rounded-xl shadow-sm border border-cyber-100 p-6 flex items-start space-x-4">
            <div className="bg-cyber-100 p-3 rounded-lg text-cyber-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Llámanos o WhatsApp</h3>
              <div className="mt-2 space-y-2">
                <p className="text-slate-600 font-medium">Teléfono Local: <span className="text-cyber-700">449 436 0577</span></p>
                <div className="text-slate-600">
                  <p className="text-sm font-semibold mb-1">WhatsApp:</p>
                  <ul className="list-none space-y-1">
                    <li>
                      <a href="https://wa.me/523461006459" target="_blank" rel="noreferrer" className="flex items-center hover:text-green-600 transition-colors">
                        <span className="mr-2">📱</span> 346 100 6459
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/523467006636" target="_blank" rel="noreferrer" className="flex items-center hover:text-green-600 transition-colors">
                        <span className="mr-2">📱</span> 346 700 6636
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/523461129280" target="_blank" rel="noreferrer" className="flex items-center hover:text-green-600 transition-colors">
                         <span className="mr-2">📱</span> 346 112 9280
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-sm border border-cyber-100 p-6 flex items-start space-x-4">
            <div className="bg-cyber-100 p-3 rounded-lg text-cyber-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Correo Electrónico</h3>
              <div className="mt-2 space-y-1">
                <a href="mailto:velezduran.25@gmail.com" className="block text-slate-600 hover:text-cyber-600 transition-colors">
                  velezduran.25@gmail.com
                </a>
                <a href="mailto:duranmejia_7@hotmail.com" className="block text-slate-600 hover:text-cyber-600 transition-colors">
                  duranmejia_7@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Map/Image Placeholder */}
        <div className="bg-cyber-900 rounded-xl overflow-hidden shadow-lg relative min-h-[300px] flex items-center justify-center group">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
            alt="Cyber Millenium Tech Concept" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
          />
          <div className="relative z-10 text-center px-6">
            <h3 className="text-2xl font-bold text-white mb-2">Cyber Millenium</h3>
            <p className="text-cyber-200">Tu punto de tecnología de confianza.</p>
            <div className="mt-6 inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm">
              Abierto de Lunes a Sábado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;