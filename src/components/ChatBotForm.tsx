import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxlsgiP_JXeF7k3aFzwVUe7Wo0bQuW3gRwkspWlCtKD-aqelikAX2brb91cOlZN09X4/exec';

const initialUserData = {
  nome: '',
  email: '',
  telefone: '',
  empresa: '',
  projeto: '',
};

const projetoOptions = [
  'Site Institucional',
  'E-commerce',
  'Aplicação Web',
  'Sistema Personalizado',
  'Aplicativo Mobile',
];

const ChatBotForm = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');
    try {
      const formData = new FormData();
      Object.keys(userData).forEach((key) => formData.append(key, userData[key as keyof typeof userData]));
      formData.append('dataHora', new Date().toLocaleString('pt-BR'));
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('leadAcesso', 'ok');
        router.push('/obrigadotestegratis');
      }
      setUserData(initialUserData);
    } catch (err) {
      setError('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl shadow-xl flex flex-col gap-4 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">Solicite seu Orçamento</h2>
      <p className="text-gray-300 mb-4">Preencha os dados abaixo e nossa equipe entrará em contato para apresentar uma proposta personalizada.</p>
      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        value={userData.nome}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail corporativo"
        value={userData.email}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="tel"
        name="telefone"
        placeholder="Telefone (WhatsApp)"
        value={userData.telefone}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="empresa"
        placeholder="Empresa"
        value={userData.empresa}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        name="projeto"
        value={userData.projeto}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Tipo de projeto</option>
        {projetoOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        disabled={isSending}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-60"
      >
        {isSending ? 'Enviando...' : 'Solicitar Orçamento'}
      </button>
    </form>
  );
};

export default ChatBotForm; 