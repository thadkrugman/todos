import { Component } from 'solid-js'
import { invoke } from '@tauri-apps/api'
import CheckIcon from './CheckIcon'
import CloseIcon from './CloseIcon'
import { Todo } from '../types'

interface ListItemProps {
  todo: Todo
  completed: number
  onTodoUpdated: () => void
}

const ListItem: Component<ListItemProps> = (props) => {
  const handleComplete = async () => {
    await invoke('update_todo_status', { id: props.todo.id, completed: 1 })
    props.onTodoUpdated()
  }

  const handleDelete = async () => {
    await invoke('remove_todo', { id: props.todo.id })
    props.onTodoUpdated()
  }

  return (
    <div class='flex flex-row items-center py-1.5 justify-between group'>
      <p
        class={`${
          props.completed === 1 ? 'line-through' : ''
        } font-semibold text-base text-gruv-gray-light`}
      >
        {props.todo.title}
      </p>
      <div class='h-[3px] opacity-0 group-hover:opacity-100 bg-gruv-gray-dark/10 flex-grow mx-8'></div>
      <div class='flex opacity-0 group-hover:opacity-100 overflow-hidden items-center'>
        <button
          class='mr-4'
          classList={{ hidden: props.completed === 1 }}
          onClick={handleComplete}
        >
          <CheckIcon size={20} color='hover:text-gruv-aqua' />
        </button>
        <button onClick={handleDelete}>
          <CloseIcon size={20} color='hover:text-close-red' />
        </button>
      </div>
    </div>
  )
}

export default ListItem
