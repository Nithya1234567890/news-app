import React from 'react'
import loading from './loading.gif'
const Spinner=()=>{
    return (
      <div className='container text-center'>
        <img src={loading} alt="" />
      </div>
    )
  }

export default Spinner
