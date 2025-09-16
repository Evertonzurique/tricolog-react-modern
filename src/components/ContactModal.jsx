import { useState } from 'react';
import { X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1F3F6B] rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border-none shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.1)]">
          <h5 className="text-xl font-semibold text-[#E0E6ED]">
            Entre em Contato
          </h5>
          <button 
            onClick={onClose}
            className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-[#E0E6ED] mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-3 py-2 bg-[#0A192F] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#E0E6ED] placeholder-[#A9B2C3] focus:outline-none focus:border-[#6BD6B1] focus:ring-1 focus:ring-[#6BD6B1]"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#E0E6ED] mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.com"
                className="w-full px-3 py-2 bg-[#0A192F] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#E0E6ED] placeholder-[#A9B2C3] focus:outline-none focus:border-[#6BD6B1] focus:ring-1 focus:ring-[#6BD6B1]"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-[#E0E6ED] mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Ex: Dúvida sobre planos"
                className="w-full px-3 py-2 bg-[#0A192F] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#E0E6ED] placeholder-[#A9B2C3] focus:outline-none focus:border-[#6BD6B1] focus:ring-1 focus:ring-[#6BD6B1]"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#E0E6ED] mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Descreva sua dúvida ou solicitação"
                className="w-full px-3 py-2 bg-[#0A192F] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#E0E6ED] placeholder-[#A9B2C3] focus:outline-none focus:border-[#6BD6B1] focus:ring-1 focus:ring-[#6BD6B1] resize-none"
                required
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-[rgba(255,255,255,0.1)]">
              <button
                type="button"
                onClick={onClose}
                className="border border-[#6BD6B1] text-[#6BD6B1] hover:bg-[#6BD6B1] hover:text-[#0A192F] transition-all duration-300 px-4 py-2 rounded-lg"
              >
                Fechar
              </button>
              <button
                type="submit"
                className="btn-gradient"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

