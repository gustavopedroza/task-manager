import { useState } from 'react';
import type { Task } from './types/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const tarefasIniciais: Task[] = [
  { id: '1', titulo: 'Limpar a Casa', descricao: 'Limpar o banheiro, a cozinha e a sala', status: 'pendente' },
  { id: '2', titulo: 'Estudar', descricao: 'React', status: 'concluida' },
];

function App() {
  const [tarefas, setTarefas] = useState<Task[]>(tarefasIniciais);

  const adicionarTarefa = (novaTarefa: Task) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const alternarStatus = (id: string) => {
    setTarefas(tarefas.map(t =>
      t.id === id ? { ...t, status: t.status === 'pendente' ? 'concluida' : 'pendente' } : t
    ));
  };

  const removerTarefa = (id: string) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 max-h-[90vh] overflow-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Minhas Tarefas</h1>

        <TaskForm onAdd={adicionarTarefa} />
        <TaskList tarefas={tarefas} onToggle={alternarStatus} onRemove={removerTarefa} />
      </div>
    </div>
  );
}

export default App;