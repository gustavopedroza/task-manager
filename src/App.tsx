import { useState } from 'react';

interface Task {
  id: string;
  titulo: string;
  descricao: string;
  status: 'pendente' | 'concluida';
}

const tarefasIniciais: Task[] = [
  { id: '1', titulo: 'Estudar React', descricao: 'Aprender hooks e componentes', status: 'pendente' },
  { id: '2', titulo: 'Instalar Tailwind', descricao: 'Configurar o projeto direitinho', status: 'concluida' }
];

function App() {
  const [tarefas, setTarefas] = useState<Task[]>(tarefasIniciais);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;

    const novaTarefa: Task = {
      id: Date.now().toString(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      status: 'pendente'
    };

    setTarefas([...tarefas, novaTarefa]);
    setTitulo('');
    setDescricao('');
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

        <form onSubmit={handleAdd} className="bg-gray-50 p-5 rounded-md shadow-sm mb-6 w-full">
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

        <div className="space-y-3 w-full">
          {tarefas.length === 0 ? (
            <p className="text-center text-gray-500">Nenhuma tarefa ainda...</p>
          ) : (
            tarefas.map(tarefa => (
              <div
                key={tarefa.id}
                className={`p-4 rounded border-l-4 shadow-sm ${
                  tarefa.status === 'concluida'
                    ? 'bg-green-50 border-green-500'
                    : 'bg-white border-blue-400'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3
                      className={`font-semibold text-lg ${
                        tarefa.status === 'concluida' ? 'line-through text-gray-500' : 'text-gray-800'
                      }`}
                    >
                      {tarefa.titulo}
                    </h3>
                    {tarefa.descricao && (
                      <p
                        className={`text-sm mt-1 ${
                          tarefa.status === 'concluida' ? 'line-through text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {tarefa.descricao}
                      </p>
                    )}
                    <span
                      className={`text-xs mt-2 inline-block px-2 py-1 rounded-full ${
                        tarefa.status === 'concluida'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {tarefa.status === 'concluida' ? 'Concluída' : 'Pendente'}
                    </span>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => alternarStatus(tarefa.id)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Alternar status"
                    >
                      ✅
                    </button>
                    <button
                      onClick={() => removerTarefa(tarefa.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Excluir"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
