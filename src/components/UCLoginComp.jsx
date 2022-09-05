import React, {useContext} from 'react'
import { PropsContext } from './UseContextExample';

const UCLoginComp = () => {

  //use this context and grab whatever you want from it

  const {setUsername} = useContext(PropsContext);

  return (
    <div>
        <input className='outline' type="text" name="" id="" onChange={(event)=>{
            setUsername(event.target.value);
        }} />
    </div>
  )
}

export {UCLoginComp};