import React from 'react'
import {ThreeDots} from 'react-loader-spinner';


function loader() {
  return (
    <ThreeDots
            height="300"
            width="300"
            color="#000080"
            ariaLabel="tail-spin-loading"
            radius="10"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
  )
}

export default loader