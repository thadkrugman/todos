import { Component } from 'solid-js'

const Input: Component = () => {
  return (
    <div class='flex flex-row px-6 lg:px-8 pt-4'>
      <input
        type='text'
        class='w-full p-2 mt-2 bg-gruv-bg border-b-2 border-gruv-purple outline-none focus:outline-none text-gruv-gray-light font-semibold placeholder:text-gruv-gray-dark'
        placeholder='Enter a new todo'
      />
      <button class='text-gruv-aqua font-medium text-3xl pl-6 lg:pl-8 cursor-default'>
        +
      </button>
    </div>
  )
}

export default Input
