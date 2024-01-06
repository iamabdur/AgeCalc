import React from 'react'
import Calc from './Calc'

function Images() {
  return (
    <div>
         <Calc
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'https://i.imgur.com/OKS67lhs.jpgeOqp2'
        }}
      />
      <Calc
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'https://i.imgur.com/OKS67lhs.jpg'
        }}
      />
      <Calc
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: 'https://i.imgur.com/OKS67lhs.jpg'
        }}
      />
    </div>
  )
}

export default Images