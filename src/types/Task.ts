export interface Task {
  id: string;
  titulo: string;
  descricao: string;
  status: 'pendente' | 'concluida';
}