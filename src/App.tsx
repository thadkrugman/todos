import { Component } from 'solid-js'
import CustomTitleBar from './components/CustomTitleBar'
import Input from './components/Input'
import List from './components/List'

const placeholderTodos = [
  'Do the laundry',
  'Walk the dog',
  'Buy groceries',
  'Clean the house',
]

const placeholderCompleted = ['Play videogames', 'Watch TV', 'Take a nap']

const App: Component = () => {
  return (
    <div class='min-h-screen bg-gruv-bg flex flex-col'>
      <CustomTitleBar />
      <h1 class='text-3xl font-bold text-gruv-blue px-6 lg:px-8 pt-2 select-none cursor-default'>
        Todos
      </h1>
      <Input />
      <List todos={placeholderTodos} completed={false} />
      <List todos={placeholderCompleted} completed={true} />
    </div>
  )
}

export default App
