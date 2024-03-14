import { Component, createResource } from 'solid-js'
import { invoke } from '@tauri-apps/api'
import CustomTitleBar from './components/CustomTitleBar'
import Input from './components/Input'
import List from './components/List'

interface Todo {
  id: number
  title: string
  completed: number
}

const App: Component = () => {
  const [todos, { refetch: refetchTodos }] = createResource(async () => {
    try {
      return await invoke<Todo[]>('get_all_todos')
    } catch (error) {
      console.error('Failed to fetch todos:', error)
      return []
    }
  })

  const [completedTodos, { refetch: refetchCompletedTodos }] = createResource(
    async () => {
      try {
        return await invoke<Todo[]>('get_completed_todos')
      } catch (error) {
        console.error('Failed to fetch completed todos:', error)
        return []
      }
    },
  )

  const handleTodoAdded = () => {
    refetchTodos()
    refetchCompletedTodos()
  }

  const handleTodoUpdated = () => {
    refetchTodos()
    refetchCompletedTodos()
  }

  return (
    <div class='min-h-screen bg-gruv-bg flex flex-col'>
      <CustomTitleBar />
      <h1 class='text-3xl font-bold text-gruv-blue px-6 lg:px-8 pt-2 select-none cursor-default'>
        Todos
      </h1>
      <Input onTodoAdded={handleTodoAdded} />
      <List
        todos={todos() || []}
        completed={0}
        onTodoUpdated={handleTodoUpdated}
      />
      <List
        todos={completedTodos() || []}
        completed={1}
        onTodoUpdated={handleTodoUpdated}
      />
    </div>
  )
}

export default App
