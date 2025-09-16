const Hero = ({ onContactClick }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-5/6 text-center">
            <h1 className="hero-title">
              Revolucione a Avaliação Capilar dos Seus Clientes
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto mb-10 text-[#A9B2C3] leading-relaxed">
              O TricoLog é a plataforma SaaS que ajuda profissionais da saúde e beleza capilar a organizar e centralizar o histórico de seus clientes com uma anamnese digital detalhada e fotodocumentação estruturada, agilizando o diagnóstico e o acompanhamento dos tratamentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="btn-gradient text-lg px-8 py-3"
              >
                Ver Planos e Preços
              </button>
              <button 
                onClick={onContactClick}
                className="border border-[#6BD6B1] text-[#6BD6B1] hover:bg-[#6BD6B1] hover:text-[#0A192F] transition-all duration-300 text-lg px-8 py-3 rounded-lg"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

