import { Check } from 'lucide-react';
import telasMultimidia from '../assets/telas-multimidia.webp';

const TargetAudience = () => {
  const targetList = [
    "Tricologistas e dermatologistas especializados",
    "Cabeleireiros e terapeutas capilares",
    "Clínicas de estética e beleza",
    "Profissionais autônomos da área capilar",
    "Centros de tratamento especializado"
  ];

  return (
    <section id="target-audience" className="section-even py-20">
      <div className="container mx-auto px-4 mt-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 lg:pr-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E0E6ED]">
              Criado para você, profissional da beleza e saúde capilar
            </h2>
            <p className="text-lg mb-8 text-[#A9B2C3]">
              O TricoLog foi projetado pensando nas necessidades diárias de quem trabalha para devolver a saúde e a beleza aos cabelos.
            </p>
            
            <ul className="space-y-4">
              {targetList.map((item, index) => (
                <li key={index} className="flex items-center text-lg text-[#E0E6ED]">
                  <Check className="text-[#6BD6B1] mr-4 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <img 
              src={telasMultimidia} 
              className="w-full max-w-lg rounded-2xl shadow-2xl" 
              alt="Interface do TricoLog"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

