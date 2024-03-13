import { Component } from 'solid-js';
import CustomTitleBar from './components/CustomTitleBar';
import Input from './components/Input';
import List from './components/List';

const placeholderTodos = [
	'Do the laundry',
	'Walk the dog',
	'Buy groceries',
	'Clean the house',
];

const placeholderFinished = ['Play videogames', 'Watch TV', 'Take a nap'];

const App: Component = () => {
	return (
		<div class='min-h-screen bg-gruv-bg flex flex-col'>
			<CustomTitleBar />
			<Input />
			<List todos={placeholderTodos} finished={false} />
			<List todos={placeholderFinished} finished={true} />
		</div>
	);
};

export default App;
