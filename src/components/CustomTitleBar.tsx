import { Component } from 'solid-js'
import { appWindow } from '@tauri-apps/api/window'

const CustomTitleBar: Component = () => {
  const handleClose = async () => {
    await appWindow.close()
  }

  const handleMinimize = async () => {
    await appWindow.minimize()
  }

  const handleMaximize = async () => {
    await appWindow.maximize()
  }

  return (
    <div
      data-tauri-drag-region='true'
      id='title-bar'
      class='flex flex-row px-6 lg:px-8 py-5 cursor-default items-start'
    >
      <div class='group flex flex-row space-x-2'>
        <button
          onClick={() => handleClose()}
          class='rounded-full flex h-3 w-3 items-center justify-center bg-gruv-gray-dark group-hover:bg-close-red group cursor-default'
        />
        <button
          onClick={() => handleMinimize()}
          class='rounded-full flex h-3 w-3 items-center justify-center bg-gruv-gray-dark group-hover:bg-gruv-yellow group cursor-default'
        />
        <button
          onClick={() => handleMaximize()}
          class='rounded-full flex h-3 w-3 items-center justify-center bg-gruv-gray-dark group-hover:bg-gruv-aqua group cursor-default'
        />
      </div>
    </div>
  )
}

export default CustomTitleBar
