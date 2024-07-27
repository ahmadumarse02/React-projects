import React from 'react'

function Button({btnText}) {
  return (
    <div className='text-white bg-primary rounded-full py-3 px-7 max-w-fit cursor-pointer'>
        {btnText || "Order Now"}
    </div>
  )
}

export default Button;