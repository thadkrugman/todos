import { Component, For, mergeProps } from 'solid-js';
import ListItem from './ListItem';

interface ListProps {
	todos: string[];
	finished: boolean;
}

const List: Component<ListProps> = (props) => {
	const merged = mergeProps(
		{
			finished: false,
			todos: [],
		},
		props
	);

	return (
		<div class='mt-8 px-6 lg:px-8'>
			<For each={merged.todos}>
				{(todo) => <ListItem todo={todo} finished={props.finished} />}
			</For>
		</div>
	);
};

export default List;
