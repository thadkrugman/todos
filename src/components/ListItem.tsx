import { Component } from 'solid-js'
import CheckIcon from './CheckIcon'
import CloseIcon from './CloseIcon'

interface ListItemProps {
  todo: string
  completed: boolean
}

const ListItem: Component<ListItemProps> = (props) => {
  return (
    <div class='flex flex-row items-center py-1.5 justify-between group'>
      <p
        class={`${props.completed && 'line-through'} font-semibold text-base text-gruv-gray-light`}
      >
        {props.todo}
      </p>
      <div class='h-[3px] opacity-0 group-hover:opacity-100 bg-gruv-gray-dark/20 flex-grow mx-8'></div>
      <div class='flex opacity-0 group-hover:opacity-100 overflow-hidden items-center'>
        <button class='mr-4' classList={{ hidden: props.completed }}>
          <CheckIcon size={18} color='hover:text-gruv-aqua' />
        </button>
        <button>
          <CloseIcon size={18} color='hover:text-gruv-purple' />
        </button>
      </div>
    </div>
  )
}

export default ListItem
