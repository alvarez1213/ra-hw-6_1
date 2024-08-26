import React from 'react'

import './watches.css'

import { Watch } from '../Watch'

export const Watches = ({ watches, handleDelete }) => {
  return (
    <div className='watches'>
      {watches.map((watch) => (
        <Watch watch={watch} handleDelete={handleDelete} />
      ))}
    </div>
  )
}
