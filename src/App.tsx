import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  MessageCircle,
  ArrowRight,
  Heart,
  Shield,
  Sparkles
} from 'lucide-react';
import siteData from './data.json';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const {
    siteMetadata,
    businessInformation,
    heroSection,
    aboutSection,
    services,
    faq,
    testimonials,
    contactSection,
    navigation
  } = siteData;

  const dynamicStyles = {
    '--primary': siteMetadata.primaryColor,
    '--secondary': siteMetadata.secondaryColor,
    '--accent': siteMetadata.accentColor,
    '--primary-hover': siteMetadata.primaryColor + 'dd', // slightly transparent for hover
  } as React.CSSProperties;

  return (
    <div style={dynamicStyles} className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[var(--primary)]/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div 
              style={{ backgroundColor: 'var(--primary)', boxShadow: '0 10px 15px -3px var(--primary)33' }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl"
            >
              C
            </div>
            <span style={{ color: 'var(--secondary)' }} className="font-display font-bold text-xl tracking-tight">
              {siteMetadata.siteName}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                style={{ color: 'var(--secondary)' }}
                className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              style={{ backgroundColor: 'var(--primary)' }}
              className="text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              {heroSection.callToActionText}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            style={{ color: 'var(--secondary)' }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
            >
              {navigation.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ color: 'var(--secondary)' }}
                  className="text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              style={{ backgroundColor: 'var(--primary)1a', color: 'var(--primary)' }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles size={14} />
              {siteMetadata.tagline}
            </div>
            <h1 style={{ color: 'var(--secondary)' }} className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              {heroSection.headline}
            </h1>
            <p style={{ color: 'var(--secondary)' }} className="text-xl opacity-70 mb-10 max-w-lg leading-relaxed">
              {heroSection.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={heroSection.callToActionLink}
                style={{ backgroundColor: 'var(--primary)', boxShadow: '0 20px 25px -5px var(--primary)33' }}
                className="text-white px-8 py-4 rounded-2xl text-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                {heroSection.callToActionText}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                style={{ borderColor: 'var(--accent)', color: 'var(--secondary)' }}
                className="bg-white border-2 px-8 py-4 rounded-2xl text-lg font-bold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all flex items-center justify-center"
              >
                Ver servicios
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px]">
              <motion.div
                animate={{
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 40% 60% 60%",
                    "60% 40% 30% 70% / 60% 60% 40% 40%",
                    "40% 60% 70% 30% / 40% 40% 60% 60%"
                  ]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5]"
              >
                <img 
                  src={heroSection.heroImage} 
                  alt="Niño jugando" 
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle overlay to blend with background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 to-transparent pointer-events-none" />
              </motion.div>

              {/* Organic decorative background shapes */}
              <motion.div 
                animate={{
                  borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
                  scale: [1, 1.1, 1],
                  rotate: [0, 45, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundColor: 'var(--primary)22' }} 
                className="absolute -top-12 -right-12 w-full h-full blur-3xl -z-10" 
              />
              <motion.div 
                animate={{
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 30% 70% / 50% 60% 40% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                  scale: [1, 1.2, 1],
                  rotate: [0, -30, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ backgroundColor: 'var(--secondary)11' }} 
                className="absolute -bottom-16 -left-16 w-full h-full blur-3xl -z-20" 
              />

              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-5 rounded-3xl shadow-xl z-20 hidden sm:block border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner">
                    <Heart fill="currentColor" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Confianza</p>
                    <p style={{ color: 'var(--secondary)' }} className="text-base font-bold">100% Personalizado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ backgroundColor: 'var(--accent)' }} className="py-24 bg-opacity-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={aboutSection.image} 
                alt="Terapia ocupacional" 
                className="rounded-[2.5rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 style={{ color: 'var(--secondary)' }} className="font-display text-4xl font-bold mb-6">
                {aboutSection.title}
              </h2>
              <p style={{ color: 'var(--secondary)' }} className="text-lg opacity-80 mb-8 leading-relaxed">
                {businessInformation.fullDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-white">
                  <div style={{ backgroundColor: 'var(--primary)1a', color: 'var(--primary)' }} className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                    <Shield size={24} />
                  </div>
                  <h3 style={{ color: 'var(--secondary)' }} className="font-bold mb-2">Misión</h3>
                  <p style={{ color: 'var(--secondary)' }} className="text-sm opacity-70">{aboutSection.mission}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-white">
                  <div style={{ backgroundColor: 'var(--secondary)1a', color: 'var(--secondary)' }} className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 style={{ color: 'var(--secondary)' }} className="font-bold mb-2">Filosofía</h3>
                  <p style={{ color: 'var(--secondary)' }} className="text-sm opacity-70">{aboutSection.philosophy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 style={{ color: 'var(--secondary)' }} className="font-display text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p style={{ color: 'var(--secondary)' }} className="opacity-60 max-w-2xl mx-auto">
              Intervenciones especializadas diseñadas para cada etapa del desarrollo infantil.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-50 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 style={{ color: 'var(--secondary)' }} className="font-display font-bold text-xl">{service.name}</h3>
                    <span style={{ backgroundColor: 'var(--primary)1a', color: 'var(--primary)' }} className="text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                      {service.ageRange}
                    </span>
                  </div>
                  <p style={{ color: 'var(--secondary)' }} className="opacity-70 text-sm mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div style={{ color: 'var(--secondary)' }} className="flex items-center gap-2 text-xs font-medium opacity-50">
                      <Clock size={14} />
                      {service.sessionDuration}
                    </div>
                    <div style={{ color: 'var(--primary)' }} className="font-bold">
                      {service.price}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ backgroundColor: 'var(--secondary)' }} className="py-24 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-white/60">Resolvemos tus dudas para que te sientas seguro con nosotros.</p>
          </div>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button 
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/10 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-bold">{item.question}</span>
                  {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-white/70 text-sm leading-relaxed"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 style={{ color: 'var(--secondary)' }} className="font-display text-4xl font-bold mb-4">Lo que dicen los padres</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} style={{ borderColor: 'var(--accent)' }} className="bg-[#FDFCFB] p-10 rounded-[2.5rem] border relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} style={{ color: 'var(--primary)' }} fill="currentColor" />
                  ))}
                </div>
                <p style={{ color: 'var(--secondary)' }} className="text-lg opacity-80 italic mb-8 leading-relaxed">
                  "{t.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div style={{ backgroundColor: 'var(--primary)33', color: 'var(--primary)' }} className="w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--secondary)' }} className="font-bold">{t.name}</h4>
                    <p style={{ color: 'var(--secondary)' }} className="text-xs opacity-50">{t.relation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ backgroundColor: 'var(--accent)' }} className="py-24 bg-opacity-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 style={{ color: 'var(--secondary)' }} className="font-display text-4xl font-bold mb-6">
                {contactSection.contactTitle}
              </h2>
              <p style={{ color: 'var(--secondary)' }} className="opacity-70 mb-10">
                {contactSection.contactDescription}
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div style={{ backgroundColor: 'var(--primary)1a', color: 'var(--primary)' }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span style={{ color: 'var(--secondary)' }} className="font-medium">{businessInformation.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div style={{ backgroundColor: 'var(--primary)1a', color: 'var(--primary)' }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span style={{ color: 'var(--secondary)' }} className="font-medium">{businessInformation.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div style={{ backgroundColor: 'var(--primary)1a', color: 'var(--primary)' }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span style={{ color: 'var(--secondary)' }} className="font-medium">{businessInformation.address}</span>
                </div>
              </div>

              <a 
                href={`https://wa.me/${businessInformation.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hola, tengo una consulta sobre las terapias.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#128C7E] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={24} />
                {contactSection.whatsappCTA}
              </a>
            </div>
            <div className="bg-gray-100 min-h-[400px]">
              <iframe 
                src={contactSection.mapEmbedLink}
                className="w-full h-full border-0 grayscale opacity-80"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div 
              style={{ backgroundColor: 'var(--primary)' }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
            >
              C
            </div>
            <span style={{ color: 'var(--secondary)' }} className="font-display font-bold text-lg">
              {siteMetadata.siteName}
            </span>
          </div>
          <div style={{ color: 'var(--secondary)' }} className="text-sm opacity-40">
            © {new Date().getFullYear()} {siteMetadata.siteName}. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            {/* Social icons could go here */}
            <div style={{ color: 'var(--secondary)' }} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-40 hover:text-[var(--primary)] hover:opacity-100 transition-colors cursor-pointer">
              <Heart size={16} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
