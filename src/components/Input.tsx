import { Component, createSignal } from 'solid-js'
import { invoke } from '@tauri-apps/api'

interface InputProps {
  onTodoAdded: () => void
}

const Input: Component<InputProps> = (props) => {
  const [title, setTitle] = createSignal('')

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    if (title().trim() !== '') {
      await invoke('add_todo', { title: title().trim() })
      setTitle('')
      props.onTodoAdded()
    }
  }

  return (
    <form onSubmit={handleSubmit} class='flex flex-row px-6 lg:px-8 pt-4'>
      <input
        type='text'
        value={title()}
        onInput={(e) => setTitle(e.currentTarget.value)}
        class='w-full p-2 mt-2 bg-gruv-bg border-b-2 border-gruv-purple outline-none focus:outline-none text-gruv-gray-light font-semibold placeholder:text-gruv-gray-dark'
        placeholder='Enter a new todo'
      />
      <button
        type='submit'
        class='text-gruv-aqua font-medium text-3xl pl-6 lg:pl-8 cursor-default'
      >
        +
      </button>
    </form>
  )
}

export default Input
