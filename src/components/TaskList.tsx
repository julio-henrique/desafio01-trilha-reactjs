import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    if (!newTaskTitle) return
    
    // Aqui criamos a nova tafera com um id random e os isComplete == falso
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }
    // Aqui vamos fazer a mudança de estado, adicionar a nova tarefa e manter as anteriores
    setTasks(task => [...task, newTask])
    // E depois limpamos o input
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    // Eu começo mapeando todas as tasks, procuro uma que tenha o id igual ao que foi passado, 
    const completedTasks = tasks.map(task => {
      if(task.id === id) {
        // depois mantenho as tasks anteriores e seus valores como estavam, mas mudo o estado do isComplete, 
        // não mudo como true, mas sim com 'negação', porque dessa forma consigo marcar ou desmarcar a task. 
        return {
          ...task,
          isComplete: !task.isComplete
        }
      } else {
        // Aqui é para quando tiver mais de uma tarefa e para o programa saber o que fazer com as tasks que não se encaixam no if, basicamente fazer nada :p.
        return task
      }
    })
    // Nós nunca modificamos um estado diretamente, nós criamos um novo estado.
    setTasks(completedTasks)
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    // Vou filtrar os ids e descartar aquele id que for igual ao que foi passado, 
    // depois passamos os que não forem iguais para o setTasks, excluindo a task e renderizando.
    const removeTask = tasks.filter(task => task.id !== id)
    setTasks(removeTask)
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}
