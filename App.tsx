import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight, CheckCircle2, Mail, Linkedin, ArrowUpRight, Trophy, Award, ExternalLink, Phone, MapPin } from 'lucide-react';
import { CONTENT, Icons } from './constants';
import { Language } from './types';
import { ProcessAnimation } from './components/ProcessAnimation';
import { ToolShowcase } from './components/ToolShowcase';

function App() {
  const [lang, setLang] = useState<Language>('de'); // Default to German for local target
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'de' : 'en');
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-inter selection:bg-blue-200">
      
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Modest Logo */}
          <div className="flex items-center space-x-2 group cursor-default">
             <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
             <span className="font-bold text-lg tracking-tight text-slate-800">Kamrul Arefin</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors text-sm font-medium">{t.nav.services}</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-blue-600 transition-colors text-sm font-medium">{t.nav.process}</button>
            <button onClick={() => scrollToSection('case-studies')} className="hover:text-blue-600 transition-colors text-sm font-medium">{t.nav.caseStudies}</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors text-sm font-medium">{t.nav.about}</button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium">{t.nav.contact}</button>
            
            <button onClick={toggleLang} className="flex items-center space-x-1 text-slate-600 hover:text-slate-900">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{lang}</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLang} className="flex items-center space-x-1 text-slate-600">
                <span className="text-xs font-bold uppercase">{lang}</span>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 px-4 py-4 flex flex-col space-y-4 shadow-xl">
             <button onClick={() => scrollToSection('services')} className="text-left font-medium p-2">{t.nav.services}</button>
             <button onClick={() => scrollToSection('process')} className="text-left font-medium p-2">{t.nav.process}</button>
             <button onClick={() => scrollToSection('case-studies')} className="text-left font-medium p-2">{t.nav.caseStudies}</button>
             <button onClick={() => scrollToSection('about')} className="text-left font-medium p-2">{t.nav.about}</button>
             <button onClick={() => scrollToSection('contact')} className="text-left font-medium p-2 text-blue-600">{t.nav.contact}</button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 text-center max-w-4xl">
           <div className="flex flex-col items-center gap-2 mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide border border-blue-100">
                <CheckCircle2 className="w-3 h-3 mr-2" />
                Meta Certified & Google Partner
              </div>
              <div className="inline-flex items-center text-slate-500 text-sm font-medium">
                 <MapPin className="w-3 h-3 mr-1" />
                 {t.hero.location}
              </div>
           </div>
           
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
             {t.hero.title}
           </h1>
           <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
             {t.hero.subtitle}
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
             <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center">
               {t.hero.ctaPrimary}
               <ChevronRight className="w-4 h-4 ml-2" />
             </button>
             <button onClick={() => scrollToSection('services')} className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
               {t.hero.ctaSecondary}
             </button>
           </div>
        </div>
      </section>

      {/* PROCESS ANIMATION SECTION */}
      <section id="process" className="py-20 bg-slate-50 border-t border-slate-100">
         <ProcessAnimation content={t.process} />
      </section>

      {/* TOOL INTERFACE SHOWCASE SECTION */}
      <section className="py-12 bg-white">
        <ToolShowcase content={t.toolPreview} />
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
             <p className="text-slate-500">{t.services.subtitle}</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {t.services.items.map((item, idx) => {
               const Icon = Icons[item.icon];
               return (
                 <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group">
                   <div className="w-12 h-12 bg-blue-50 rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     {Icon && <Icon className="w-6 h-6" />}
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                   <p className="text-slate-600 leading-relaxed">{item.description}</p>
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section id="case-studies" className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.caseStudies.title}</h2>
             <p className="text-slate-500">{t.caseStudies.subtitle}</p>
           </div>

           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
              {t.caseStudies.items.map((study, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                   {/* Card Header */}
                   <div className="bg-slate-900 p-6 flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2 text-blue-400 mb-2">
                           <Trophy className="w-4 h-4" />
                           <span className="text-xs font-bold uppercase tracking-wider">{study.industry}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{study.client}</h3>
                      </div>
                      <div className="flex space-x-1">
                        {study.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] rounded border border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                   </div>
                   
                   {/* Card Content */}
                   <div className="p-8">
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center">
                          {lang === 'en' ? 'Challenge' : 'Herausforderung'}
                        </h4>
                        <p className="text-slate-600 text-sm">{study.challenge}</p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center">
                           {lang === 'en' ? 'Solution' : 'Lösung'}
                        </h4>
                        <p className="text-slate-600 text-sm">{study.solution}</p>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-4 flex items-center">
                           {lang === 'en' ? 'Results' : 'Ergebnisse'}
                        </h4>
                        <ul className="space-y-3">
                          {study.results.map((result, rIdx) => (
                            <li key={rIdx} className="flex items-start">
                              <ArrowUpRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 shrink-0" />
                              <span className="text-slate-700 font-medium text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
             <div className="relative group">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Profile Image - Replace src with your local file path e.g. "/profile.jpg" */}
                <img 
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Digital Marketing Workstation" 
                  className="relative rounded-2xl shadow-2xl border-4 border-slate-800 w-full max-w-md mx-auto object-cover aspect-[3/4]"
                />
             </div>
           </div>
           
           <div className="w-full md:w-1/2">
             <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
             <p className="text-slate-300 text-lg mb-8 leading-relaxed">
               {t.about.text}
             </p>
             
             {/* Certificate Cards */}
             <div className="space-y-4 mb-8">
               {t.about.certificates.map((cert, index) => (
                 <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 p-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 hover:bg-slate-800 transition-colors">
                   <div className="bg-blue-600 p-3 rounded-lg shrink-0 shadow-lg shadow-blue-900/50">
                      <Award className="w-8 h-8 text-white" />
                   </div>
                   <div className="flex-grow">
                      <h3 className="font-bold text-white text-lg leading-tight mb-1">{cert.title}</h3>
                      <p className="text-slate-400 text-sm mb-3">{cert.subtitle} • {cert.issuer} • {cert.date}</p>
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors group">
                         {lang === 'en' ? 'Verify Credential' : 'Zertifikat prüfen'} 
                         <ExternalLink className="w-3 h-3 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                   </div>
                 </div>
               ))}
             </div>

             <div className="grid grid-cols-3 gap-6 border-t border-slate-700 pt-8">
               {t.about.stats.map((stat, idx) => (
                 <div key={idx}>
                   <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                   <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.contact.title}</h2>
              <p className="text-slate-500">{t.contact.subtitle}</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                     {lang === 'en' ? 'Name' : 'Name'}
                  </label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t.contact.name} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                     {lang === 'en' ? 'Email' : 'E-Mail'}
                  </label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t.contact.email} />
                </div>
              </div>
              
              <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {lang === 'en' ? 'Message' : 'Nachricht'}
                 </label>
                 <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder={t.contact.message}></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg">
                {t.contact.submit}
              </button>
            </form>

            <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
               <a href="https://www.linkedin.com/in/kamrularefin/" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                 <Linkedin className="w-5 h-5 mr-2" />
                 LinkedIn
               </a>
               <a href={`mailto:${t.contact.email}`} className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                 <Mail className="w-5 h-5 mr-2" />
                 Email
               </a>
               <a href={`tel:${t.contact.phone.replace(/[^\d+]/g, '')}`} className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                 <Phone className="w-5 h-5 mr-2" />
                 {t.contact.phone}
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Kamrul Arefin. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;