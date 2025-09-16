import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "O TricoLog transformou a maneira como eu acompanho minhas clientes. Ter todo o histórico e as fotos em um só lugar é fantástico. Meus diagnósticos estão mais rápidos e precisos.",
      name: "Joana Silva",
      role: "Tricologista - São Paulo, SP"
    },
    {
      quote: "Finalmente uma ferramenta que entende nossa necessidade de documentação visual. A padronização das 9 fotos é o diferencial para mostrar a evolução real do tratamento. Recomendo!",
      name: "Marcia de Mello",
      role: "Cabeleireira-Terapeuta capilar - Florianopolis, SC"
    }
  ];

  return (
    <section id="testimonials" className="section-even py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="lg:w-2/3 mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E0E6ED]">
              O que os profissionais dizem
            </h2>
            <p className="text-lg text-[#A9B2C3]">
              Veja como o TricoLog está otimizando a rotina de especialistas em todo o Brasil.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="mb-6">
                <Quote className="text-[#3D7CB8] text-4xl mb-4" />
                <p className="text-lg italic text-[#A9B2C3] leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              
              <div>
                <h6 className="text-[#E0E6ED] font-semibold mb-1">
                  {testimonial.name}
                </h6>
                <small className="text-[#A9B2C3]">
                  {testimonial.role}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

