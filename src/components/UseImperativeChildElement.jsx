import React, {useImperativeHandle, forwardRef, useState} from 'react'

const UseImperativeChildElement = forwardRef((props, ref) => {

    //state will be defined here, but it's going be changed from the parent element
    const [text, setText] = useState(true)

    //takes in the reference, plus a function that returns an object
    //which contains the things we want to be accessible in parent

    //shouldn't really pass the state functions directly
    //but you get it right?

    useImperativeHandle(ref, ()=>({
      text,
      setText
    }))

  return (
    <div className='flex justify-center m-10'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Button in Child - Click to toggle</button>
        {text && <h1>This is some text</h1>}
    </div>
  )
})

export default UseImperativeChildElement;