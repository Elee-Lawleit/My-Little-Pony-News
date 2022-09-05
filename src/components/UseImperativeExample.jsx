import React, {useRef} from 'react'
import UseImperativeChildElement from './UseImperativeChildElement'

//used to pass the state from child to parent
//uses useRef

export default function UseImperativeExample() {

  const ChildButton = useRef(null)

  const changeStateFromParent = ()=>{
    ChildButton.current.setText(!ChildButton.current.text);
  }

  return (
    <div className='flex flex-col justify-center text-center'>
      UseImperativeExample
        <button onClick={changeStateFromParent} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Button in Parent</button>
        <UseImperativeChildElement ref={ChildButton}/>
    </div>
  )
}
