import { Component } from 'solid-js';
import { appWindow } from '@tauri-apps/api/window';

const CustomTitleBar: Component = () => {
	const handleClose = async () => {
		await appWindow.close();
		alert('Window closed');
	};

	return (
		<div
			data-tauri-drag-region='true'
			id='title-bar'
			class='flex flex-row justify-between px-6 lg:px-8 pt-6 lg:pt-8 cursor-pointer items-start'
		>
			<div id='drag-region' data-tauri-drag-region='true' class='w-full'>
				<h1
					data-tauri-drag-region='true'
					class='text-3xl font-bold text-gruv-blue cursor-pointer'
				>
					Todos
				</h1>
			</div>
			<button
				onClick={() => handleClose()}
				id='window-controls'
				class='font-bold text-lg text-gruv-gray-medium'
			>
				&#x2717;
			</button>
		</div>
	);
};

export default CustomTitleBar;
