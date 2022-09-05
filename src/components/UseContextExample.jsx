import React, { useState, createContext } from 'react'
import { UCLoginComp } from './UCLoginComp'
import { UCShowNameComp } from './UCShowNameComp'

// instead of passing props and drilling them into child compoenents
//we can use ContextAPI/Hook

//creating the context at the top level module and exporting it
//so we can access this context from other files as well
export const PropsContext = createContext(null);

const UseContextExample = () => {
    const [username, setUsername] = useState("")
    return (
        <div>

          {/* wrapping everything in the context */}
            <PropsContext.Provider value={{username, setUsername}}>
                <div className='felx flex-col m-10 text-center'>UseContextExample
                    {/* one way of doing it is this, drilling the props into children compoenents */}
                    <UCLoginComp />
                    <UCShowNameComp />
                    {/* but instead of doing that, we can do this  */}
                </div>
            </PropsContext.Provider>
        </div>
    )
}


export default UseContextExample;