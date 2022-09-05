import React, {useContext} from 'react'
import { PropsContext } from './UseContextExample';

const UCShowNameComp = () => {

  const {username} = useContext(PropsContext)

  return (
    <div>
        <h1>{username}</h1>
    </div>
  )
}

export {UCShowNameComp};
