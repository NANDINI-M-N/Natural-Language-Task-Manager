import { Task } from '@/types/task';
import TaskTable from './TaskTable';
import { ListTodo, Zap, BrainCircuit, CheckSquare, Calendar } from 'lucide-react';

interface TaskBoardProps {
  tasks: Task[];
  onUpdateTask: (taskId: string, updates: Partial<Task>) => void;
  onDeleteTask: (taskId: string) => void;
  isLoading?: boolean;
}

const TaskBoard = ({ tasks, onUpdateTask, onDeleteTask, isLoading = false }: TaskBoardProps) => {
  return (
    <div className="max-w-full mx-auto px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card border border-white/50 overflow-hidden hover:shadow-glow transition-all duration-300">
        <div className="px-8 py-6 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <CheckSquare className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold font-jakarta">
              📋 Your Tasks
            </h2>
            <div className="flex items-center gap-2 ml-auto">
              <Calendar className="w-5 h-5" />
              <span className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
                {tasks.length}
              </span>
            </div>
          </div>
        </div>
        
        {isLoading ? (
          <div className="p-16 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
                <BrainCircuit className="w-12 h-12 text-teal-400 animate-spin duration-3000" />
              </div>
            </div>
            <div className="text-slate-600 text-xl mb-2 font-medium font-jakarta">Processing your task... 🔄</div>
            <div className="text-slate-500 text-lg font-outfit">Using AI to understand your request ✨</div>
          </div>
        ) : tasks.length === 0 ? (
          <div className="p-16 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mb-4 animate-float">
                <ListTodo className="w-12 h-12 text-teal-400" />
              </div>
            </div>
            <div className="text-slate-500 text-xl mb-2 font-medium font-jakarta">No tasks yet 🌱</div>
            <div className="text-slate-500 text-lg font-outfit">Add your first task using natural language above ✨</div>
            <div className="mt-6 flex justify-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-teal-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        ) : (
          <TaskTable 
            tasks={tasks}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        )}
      </div>
    </div>
  );
};

export default TaskBoard;
