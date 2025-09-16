import { FileSignature, Camera, FolderOpen } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileSignature className="feature-icon" />,
      title: "Anamnese Digital Completa",
      description: "Digitalize e centralize o processo de anamnese com um formulário tricológico detalhado e customizável, preenchido em minutos."
    },
    {
      icon: <Camera className="feature-icon" />,
      title: "Fotodocumentação Padronizada",
      description: "Registre a evolução de cada tratamento com um padrão de 9 fotos específicas do couro cabeludo a cada avaliação."
    },
    {
      icon: <FolderOpen className="feature-icon" />,
      title: "Histórico de Clientes Centralizado",
      description: "Acesse o histórico completo de avaliações de cada cliente de forma rápida e organizada, de qualquer lugar."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-20">
          <div className="lg:w-2/3 mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#E0E6ED]">
              A ferramenta definitiva para o profissional capilar moderno
            </h2>
            <p className="text-lg text-[#A9B2C3]">
              Ofereça conveniência, organização e rapidez na avaliação de clientes, facilitando o acesso à documentação completa para decisões de tratamento e acompanhamento da evolução.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="text-center">
                {feature.icon}
                <h4 className="text-xl font-semibold mb-4 text-[#E0E6ED]">
                  {feature.title}
                </h4>
                <p className="text-[#A9B2C3] text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

