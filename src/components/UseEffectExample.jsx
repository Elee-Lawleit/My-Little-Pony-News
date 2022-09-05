import React, {useEffect, useLayoutEffect, useState} from 'react'

export default function UseEffectExample() {

  
  const [id, setId] = useState(null);
  const changeId = ()=>{
    setId(id + 1)
  }

  //does the job for componentDidMount(), componentWillUpdate() and componentWillUnmount()

  //the very first call is for componentDidMount()
  
  //componentWillUpdate() works when a dependency is added as a second parameter

  //the return function is what runs as an alternative of componentWillUnmount()

  //the return function prints the value just before re-rendering the component again, containing the old value


  //useLayourEffect is basically useEffect but it runs before the component is mounted
  //kinda similar to the constructor, or in other words, componentWillMount() --> made up function btw
  useLayoutEffect(() => {
    console.log("Will run before mounting the component");
    return () => { };
  }, [])

  useEffect(()=>{
    console.log("The id on first render is: ", id);

    return ()=>{
      console.log("The id just before the second render is: ", id);
    }

  }, [id])

  return (
    <div className='flex flex-col justify-center m-10'>
      <div className='text-center'>UseEffectExample</div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={changeId}>Click to see UseEffect in action</button>
    </div>
  )
}
