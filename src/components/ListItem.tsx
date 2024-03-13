import { Component } from 'solid-js';

interface ListItemProps {
	todo: string;
	finished: boolean;
}

const ListItem: Component<ListItemProps> = (props) => {
	return (
		<div class='flex flex-row items-center py-1'>
			<input type='checkbox' class='mr-4' />
			<p
				class={`${props.finished ? 'text-gruv-gray-medium line-through' : 'text-gruv-gray-light'} font-medium`}
			>
				{props.todo}
			</p>
		</div>
	);
};

export default ListItem;
