import React from 'react'

const Spinner = () => {
    return (
      <div className='flex justify-center'>
        <img src="/loading.gif" height={70} width={70} alt="loading articles..." />
      </div>
    )
}

export default Spinner;