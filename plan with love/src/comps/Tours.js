import React from 'react'
import Card from './Card'

const Tours = ({tours, removeTour}) => {
  return (
    <div className='container'>
      <div>
        <h2 className='title'> Plan With Jimmy </h2>
      </div>
      <div className='cards'>
        {
            tours.map( (tour) => {
                return <Card {...tour} removeTour={removeTour}></Card>
            } )
        }
      </div>
    </div>
  )
}

export default Tours
 