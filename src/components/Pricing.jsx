import { Check } from 'lucide-react';

const Pricing = ({ onContactClick }) => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 49",
      period: "/mês",
      popular: false,
      features: [
        "Até 50 clientes cadastrados",
        "Anamnese digital completa",
        "Fotodocumentação básica (3 fotos)",
        "Relatórios simples",
        "Suporte por email"
      ]
    },
    {
      name: "Profissional",
      price: "R$ 99",
      period: "/mês",
      popular: true,
      features: [
        "Clientes ilimitados",
        "Anamnese digital avançada",
        "Fotodocumentação completa (9 fotos)",
        "Relatórios detalhados e personalizáveis",
        "Backup automático na nuvem",
        "Suporte prioritário",
        "Integração com agenda"
      ]
    },
    {
      name: "Clínica",
      price: "R$ 199",
      period: "/mês",
      popular: false,
      features: [
        "Múltiplos profissionais",
        "Gestão de equipe",
        "Dashboard administrativo",
        "Relatórios gerenciais",
        "API para integrações",
        "Suporte dedicado",
        "Treinamento personalizado"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="lg:w-2/3 mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E0E6ED]">
              Escolha o plano ideal para seu negócio
            </h2>
            <p className="text-lg text-[#A9B2C3]">
              Planos flexíveis que crescem junto com sua prática profissional.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              <div className="text-center mb-8">
                <h5 className="text-[#6BD6B1] font-bold text-lg mb-6">
                  {plan.name}
                </h5>
                <div className="text-5xl font-bold text-[#E0E6ED] mb-2">
                  {plan.price}
                </div>
                <div className="text-lg text-[#A9B2C3]">
                  {plan.period}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-[#A9B2C3] text-sm">
                    <Check className="text-[#6BD6B1] mr-3 flex-shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={onContactClick}
                className="w-full btn-gradient"
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

