import React from 'react'
import List from './data.json'
import Cart from './Cart'


const Jobs = () => {
  return (
      <div>
    {List.map((job, index) =>
        <Cart />
    )}
        </div>
    )
}

export default Jobs