import React from 'react'
import './Modal.css'

const Modal = ({  onSubmit, onClose, onCancel, children }) => {
  return (
    <div className='modal-container' onClick={
      (event) => {
        if (event.target.className == 'modal-container') {
          onClose('The Modal has been closed')
        }
      }
    }>
      <div className='modal'>
        <div className='modal-header'>
          <p className='close' onClick={() => onClose('Closed ....')}>
            &times;
          </p>
        </div>

        <div className='modal-content'>{children}</div>

        <div className='modal-footer'>
          <button className='btn btn-submit' onClick={() => onSubmit('Submit was clicked ...')}>
            Submit
          </button>
          <button className='btn btn-cancel' onClick={() => onCancel('Cancel was clicked ...')}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
