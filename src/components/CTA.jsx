const CTA = ({ onContactClick }) => {
  return (
    <section className="cta-section">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-3/4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E0E6ED]">
              Pronto para otimizar sua gestão capilar?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-10 text-[#A9B2C3]">
              Comece a usar o TricoLog hoje e leve seu atendimento a um novo nível de profissionalismo e eficiência.
            </p>
            <button 
              onClick={onContactClick}
              className="btn-gradient text-lg px-8 py-3"
            >
              Fale Conosco e Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

