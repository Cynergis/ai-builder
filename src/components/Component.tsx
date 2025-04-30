import React from 'react'

const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={props.id} className="text-sm font-medium">
        {label}
      </label>
      <input
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  )
}

export default Input