import React from "react";
import { Tab } from "../../types";

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyber-300 to-cyber-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}></div>
        </div>

        <div className="mx-auto max-w-2xl py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tecnología para el <span className="text-cyber-600">Futuro</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En Cyber Millenium ofrecemos las mejores soluciones en
              computación, desde equipos de alto rendimiento hasta el soporte
              que necesitas. Tu aliado tecnológico en Nochistlán.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={onCtaClick}
                className="rounded-md bg-cyber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-600 transition-transform hover:scale-105">
                Ver Productos
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-cyber-50 rounded-xl shadow-sm border border-cyber-100">
              <div className="mb-4 p-3 bg-cyber-100 rounded-full text-cyber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Equipos de Cómputo
              </h3>
              <p className="mt-2 text-gray-600">
                Laptops, PCs de escritorio y Workstations armadas a medida.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-cyber-50 rounded-xl shadow-sm border border-cyber-100">
              <div className="mb-4 p-3 bg-cyber-100 rounded-full text-cyber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Mantenimiento
              </h3>
              <p className="mt-2 text-gray-600">
                Servicio técnico especializado preventivo y correctivo.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-cyber-50 rounded-xl shadow-sm border border-cyber-100">
              <div className="mb-4 p-3 bg-cyber-100 rounded-full text-cyber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Accesorios
              </h3>
              <p className="mt-2 text-gray-600">
                Periféricos, consumibles y todo lo que necesitas para tu setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
