import { useState } from 'react';
import type { Task } from '../types/Task';

interface TaskFormProps {
  onAdd: (novaTarefa: Task) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;

    const novaTarefa: Task = {
      id: Date.now().toString(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      status: 'pendente',
    };

    onAdd(novaTarefa);
    setTitulo('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-5 rounded-md shadow-sm mb-6 w-full">
      <h2 className="text-lg font-semibold mb-3">Adicionar nova tarefa</h2>
      <input
        type="text"
        placeholder="Título da tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <textarea
        placeholder="Descrição (opcional)"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        rows={3}
        className="w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded transition"
      >
        Salvar
      </button>
    </form>
  );
}