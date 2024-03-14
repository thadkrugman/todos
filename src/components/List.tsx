import { Component, For, mergeProps } from 'solid-js'
import ListItem from './ListItem'
import { Todo } from '../types'

interface ListProps {
  todos: Todo[]
  completed: number
  onTodoUpdated: () => void
}

const List: Component<ListProps> = (props) => {
  const merged = mergeProps(
    {
      completed: 0,
      todos: [],
    },
    props,
  )

  return (
    <div class='mt-8 px-6 lg:px-8'>
      <h2 class='text-gruv-gray-dark font-extrabold text-xl mb-1'>
        {merged.completed === 1 ? 'Completed' : 'Current'}
      </h2>
      <For each={merged.todos}>
        {(todo) => (
          <ListItem
            todo={todo}
            completed={props.completed}
            onTodoUpdated={props.onTodoUpdated}
          />
        )}
      </For>
    </div>
  )
}

export default List
