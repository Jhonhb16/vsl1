import React, { useState, useEffect } from 'react';
import BenefitCard from '../components/BenefitCard';
import BusinessSVG from '../components/SVGs/BusinessSVG';
import AuditSVG from '../components/SVGs/AuditSVG';
import StrategySVG from '../components/SVGs/StrategySVG';
import GrowthSVG from '../components/SVGs/GrowthSVG';
import SupportSVG from '../components/SVGs/SupportSVG';

export default function Home() {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    cargo: '',
    empresa: '',
    telefono: '',
    correo: '',
    reto: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validación básica
    if (!formData.nombre || !formData.cargo || !formData.empresa || 
        !formData.telefono || !formData.correo || !formData.reto) {
      setError('Por favor completa todos los campos');
      return;
    }
    
    setIsLoading(true);
    
    // Simular envío (en producción, aquí iría la llamada a una API)
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  // Animaciones de entrada
  const [visibleSections, setVisibleSections] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className={`flex flex-col-reverse md:flex-row items-center md:justify-between gap-8 px-6 md:px-16 py-14 md:py-24 fade-in ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            ¿Listo para <span className="text-blue-400">transformar</span> los resultados de tu empresa?
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-lg">
            Reservá tu sesión estratégica personalizada con <strong>Jhon Mario Hernández</strong><br />
            Solo para dueños de empresa, gerentes y líderes que buscan soluciones reales, no más promesas vacías.
          </p>
          <a href="#formulario" className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-2xl text-xl text-white font-bold shadow-lg animate-bounce">
            Reservar ahora
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 opacity-30 blur-3xl rounded-full h-48 w-48 md:h-64 md:w-64 transform -translate-x-4 translate-y-4"></div>
            <BusinessSVG className="relative z-10 w-64 h-64" />
          </div>
        </div>
      </section>

      {/* Bloque de autoridad */}
      <section id="autoridad" className={`px-6 md:px-16 mb-10 fade-in ${visibleSections.autoridad ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white bg-opacity-15 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">Autoridad y resultados comprobados</h2>
          <p className="text-white text-lg mb-6">
            He ayudado a empresas en Colombia y Latinoamérica a duplicar sus leads, reducir su costo de adquisición y escalar ventas automatizando procesos clave. 
            Trabajo con resultados reales, no con teorías.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900 bg-opacity-70 p-4 rounded-xl">
              <div className="font-bold text-blue-300">Duplicamos leads</div>
              <p className="text-white text-sm">Calificados en menos de 60 días</p>
            </div>
            <div className="bg-blue-900 bg-opacity-70 p-4 rounded-xl">
              <div className="font-bold text-blue-300">Reducimos costos</div>
              <p className="text-white text-sm">Costo por venta en servicios y retail</p>
            </div>
            <div className="bg-blue-900 bg-opacity-70 p-4 rounded-xl">
              <div className="font-bold text-blue-300">Automatizamos</div>
              <p className="text-white text-sm">Procesos comerciales con IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios y diferenciadores */}
      <section id="beneficios" className={`px-6 md:px-16 mb-10 fade-in ${visibleSections.beneficios ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Beneficios claros y diferenciadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitCard 
            icon={<AuditSVG className="w-16 h-16" />}
            title="Auditoría rápida"
            description="Detectá fugas de dinero y oportunidades reales en tu proceso actual"
          />
          <BenefitCard 
            icon={<StrategySVG className="w-16 h-16" />}
            title="Estrategias personalizadas"
            description="Plan a medida según tu sector y momento de negocio"
          />
          <BenefitCard 
            icon={<GrowthSVG className="w-16 h-16" />}
            title="Escalamiento sin aumentar presupuesto"
            description="Crecé en ventas sin gastar más en pauta"
          />
          <BenefitCard 
            icon={<SupportSVG className="w-16 h-16" />}
            title="Casos reales y soporte experto"
            description="Acceso prioritario a experiencias reales y acompañamiento"
          />
        </div>
      </section>

      {/* Testimonio */}
      <section id="testimonio" className={`px-6 md:px-16 mb-12 fade-in ${visibleSections.testimonio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white bg-opacity-10 rounded-2xl shadow p-6 max-w-xl mx-auto text-center transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20">
          <div className="mb-4">
            <svg className="w-12 h-12 mx-auto text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-xl text-white font-semibold mb-4 italic">"En menos de 60 días pasamos de sobrevivir a tener lista de espera de clientes, solo afinando nuestra estrategia digital."</p>
          <span className="text-white text-sm font-bold">– CEO, Empresa del sector X</span>
        </div>
      </section>

      {/* Formulario de agendamiento */}
      <section id="formulario" className={`px-6 md:px-16 mb-20 fade-in ${visibleSections.formulario ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-2xl mx-auto">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 rounded-2xl p-8 shadow-2xl space-y-6 transform transition-all duration-500 hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Reservá tu sesión estratégica</h3>
              <p className="text-gray-800 mb-6">Cupos limitados disponibles cada semana</p>
              
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-4">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  required 
                  name="nombre" 
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre y apellido" 
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  required 
                  name="cargo" 
                  value={formData.cargo}
                  onChange={handleInputChange}
                  placeholder="Cargo en la empresa" 
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  required 
                  name="empresa" 
                  value={formData.empresa}
                  onChange={handleInputChange}
                  placeholder="Nombre de la empresa" 
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  required 
                  name="telefono" 
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="Teléfono de contacto" 
                  type="tel"
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  required 
                  name="correo" 
                  value={formData.correo}
                  onChange={handleInputChange}
                  placeholder="Correo electrónico" 
                  type="email"
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea 
                required 
                name="reto" 
                value={formData.reto}
                onChange={handleInputChange}
                placeholder="¿Cuál es el principal reto de tu empresa hoy?" 
                rows="3" 
                className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full bg-blue-700 hover:bg-blue-900 text-white text-lg font-bold py-4 rounded-2xl shadow-lg transition transform active:scale-95 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-900'}`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </div>
                ) : (
                  'Agendar sesión estratégica'
                )}
              </button>
              <p className="text-center text-gray-800 text-xs mt-2">
                *Solo para responsables de toma de decisiones que buscan resultados reales.
              </p>
            </form>
          ) : (
            <div className="mt-8 bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-xl max-w-xl mx-auto text-center text-lg font-bold shadow-lg">
              ¡Agenda confirmada! En breve recibirás los detalles en tu correo.<br />
              Si necesitás reprogramar, avísame por WhatsApp.<br />
              <span className="block mt-2 text-blue-700">Prepárate para una sesión directa, enfocada en resultados y sin rodeos.</span>
            </div>
          )}
        </div>
      </section>

      {/* Cierre motivador */}
      <section id="cierre" className={`px-6 md:px-16 mb-12 fade-in ${visibleSections.cierre ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-blue-900 bg-opacity-70 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">No dejes pasar otra semana</h2>
          <p className="text-white text-lg mb-6">Da el primer paso para transformar tu empresa</p>
          <a href="#formulario" className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-2xl text-xl text-white font-bold shadow-lg">
            Reservar ahora
          </a>
        </div>
      </section>
    </>
  );
}
