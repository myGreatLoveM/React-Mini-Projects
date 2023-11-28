import { useState } from 'react'
import './ProductForm.css'


function ProductForm(props) {

  const [newTitle, setTitle] = useState('')
  const [newDate, setDate] = useState('')
  useState()

  function titleChangeHandler(event) {
    setTitle(event.target.value)
  } 

  function dateChangeHandler(event) {
    setDate(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()

    const productData = {
      title: newTitle,
      date: newDate
    }

    console.log(productData)

    props.onNew(productData)

    setTitle('')
    setDate('')
  }

  return ( 
    <form onSubmit={submitHandler}>
      <div className='new-product__controls'>
        <div className='new-product__control'>
          <label>Titles</label>
          <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>

        <div className='new-product__control'>
          <label>Date</label>
          <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>

        <div className='new-product__button'>
          <button type='submit'>Add Product</button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm
