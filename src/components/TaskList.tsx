import type { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tarefas: Task[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function TaskList({ tarefas, onToggle, onRemove }: TaskListProps) {
  if (tarefas.length === 0) {
    return <p className="text-center text-gray-500">Nenhuma tarefa ainda...</p>;
  }

  return (
    <div className="space-y-3 w-full">
      {tarefas.map((tarefa) => (
        <TaskItem
          key={tarefa.id}
          tarefa={tarefa}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}