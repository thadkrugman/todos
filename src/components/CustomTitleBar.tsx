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
      class='flex flex-row space-x-2 px-6 lg:px-8 py-5 cursor-default items-start'
    >
      <button
        onClick={() => handleClose()}
        class='rounded-full flex h-3 w-3 items-center justify-center bg-gruv-gray-dark hover:bg-close-red group cursor-default ease-in-out transition-colors duration-150'
      />
      <button
        onClick={() => handleMinimize()}
        class='rounded-full flex h-3 w-3 items-center justify-center bg-gruv-gray-dark hover:bg-gruv-yellow group cursor-default ease-in-out transition-colors duration-150'
      />
      <button
        onClick={() => handleMaximize()}
        class='rounded-full flex h-3 w-3 items-center justify-center bg-gruv-gray-dark hover:bg-gruv-aqua group cursor-default ease-in-out transition-colors duration-150'
      />
    </div>
  )
}

export default CustomTitleBar
