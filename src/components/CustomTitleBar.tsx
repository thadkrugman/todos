import { Component } from 'solid-js'
import { appWindow } from '@tauri-apps/api/window'

const CustomTitleBar: Component = () => {
  const handleClose = async () => {
    await appWindow.close()
    alert('Window closed')
  }

  return (
    <div
      data-tauri-drag-region='true'
      id='title-bar'
      class='flex flex-row justify-between px-6 lg:px-8 py-5 cursor-default items-start'
    >
      <div class='rounded-full flex h-3 w-3 items-center justify-center bg-gruv-gray-dark hover:bg-close-red group cursor-default ease-in-out transition-colors duration-150'>
        <button
          onClick={() => handleClose()}
          class='text-xs text-gruv-gray-dark group-hover:text-black/50 cursor-default'
        >
          x
        </button>
      </div>
    </div>
  )
}

export default CustomTitleBar
