import { Component } from 'solid-js'

interface CheckIconProps {
  size?: number
  color?: string
}

const CheckIcon: Component<CheckIconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={props.size || 24}
      height={props.size || 24}
      class='text-gruv-gray-dark cursor-default ease-in-out transition-colors duration-150'
      classList={{
        [props.color || '']: Boolean(props.color),
      }}
      fill='currentColor'
      stroke='currentColor'
    >
      <path
        d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'
        stroke-width={1.8}
      />
    </svg>
  )
}

export default CheckIcon
