import React, { useReducer } from 'react'

export default function UseReducerExample() {

    //ALSO, REDUCER IS CALLED TWICE IN DEVELOPMENT PHASE
    //DON'T LOSE YOUR SHIT

    //and ofc, the reducer function should be defined before it's used inside the hook
    const reducer = (stateObject, event) => {


        switch (event.type) {
            case "INCREMENT_BY_ONE":
                return { count: stateObject.count + 1, textClickCount: stateObject.textClickCount, text: stateObject.text };
            case "CHANGE_TEXT":
                console.log(stateObject.textClickCount);
                return { count: stateObject.count, textClickCount: stateObject.textClickCount + 1, text: `This is text after ${stateObject.textClickCount} clicks!` };
            default:
                return stateObject;
            //returning the same state for all state variables if the action wasn;t in reducer function
        }
    }

    //stateObject holds all the state variables
    //dipatchFunction changes them based on what you change (using a switch)
    // useReducer(reducerFunction, {an object of all the states})

    const [stateObject, dispatchFunction] = useReducer(reducer, { count: 0, textClickCount: 1, text: "This is some initial text" });

    const increment = () => {
        dispatchFunction({ type: "INCREMENT_BY_ONE" })
    }
    const seeClicks = () => {
        dispatchFunction({ type: "CHANGE_TEXT" })
    }

    return (
        <div className='m-10'>
            <div className='text-center'>UseReducerExample</div>
            <div className="flex flex-col justify-center">
                <h1 className='text-center'>{stateObject.count}</h1>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={increment}>Click to change counter</button>
            </div>
            <div className="flex flex-col justify-center">
                <h1 className='text-center'>{stateObject.text}</h1>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={seeClicks}>Click to change text</button>
            </div>
        </div>
    )
}
