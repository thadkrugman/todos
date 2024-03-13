import { Component } from 'solid-js'

interface CloseIconProps {
  size?: number
  color?: string
}

const CloseIcon: Component<CloseIconProps> = (props) => {
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
        d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'
        stroke-width={1.8}
      />
    </svg>
  )
}

export default CloseIcon
