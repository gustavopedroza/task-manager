import type { Task } from '../types/Task';

interface TaskItemProps {
  tarefa: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function TaskItem({ tarefa, onToggle, onRemove }: TaskItemProps) {
  return (
    <div
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
              tarefa.status === 'concluida'
                ? 'line-through text-gray-500'
                : 'text-gray-800'
            }`}
          >
            {tarefa.titulo}
          </h3>

          {tarefa.descricao && (
            <p
              className={`text-sm mt-1 ${
                tarefa.status === 'concluida'
                  ? 'line-through text-gray-400'
                  : 'text-gray-600'
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
            onClick={() => onToggle(tarefa.id)}
            className="text-blue-500 hover:text-blue-700"
            title="Alternar status"
          >
            ✅
          </button>
          <button
            onClick={() => onRemove(tarefa.id)}
            className="text-red-500 hover:text-red-700"
            title="Excluir"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}