import { Component, For, mergeProps } from 'solid-js'
import ListItem from './ListItem'

interface ListProps {
  todos: string[]
  completed: boolean
}

const List: Component<ListProps> = (props) => {
  const merged = mergeProps(
    {
      completed: false,
      todos: [],
    },
    props,
  )

  return (
    <div class='mt-8 px-6 lg:px-8'>
      <h2 class='text-gruv-gray-dark font-extrabold text-xl mb-1'>
        {merged.completed ? 'Completed' : 'Current'}
      </h2>
      <For each={merged.todos}>
        {(todo) => <ListItem todo={todo} completed={props.completed} />}
      </For>
    </div>
  )
}

export default List
