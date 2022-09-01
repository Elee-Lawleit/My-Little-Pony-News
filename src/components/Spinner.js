import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center'>
        <img src="/loading.gif" height={70} width={70} alt="loading articles..." />
      </div>
    )
  }
}

export default Spinner