import { useState } from 'react'
import './App.css'
import Modal from './comps/Modal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [msgDisplay, setMsgDisplay] = useState('')

  const handleButtonClick = (msg) => {
    setModalOpen(false)
    setMsgDisplay(msg)
  }

  return (
    <div className='App'>
      <button className='btn btn-open' onClick={() => setModalOpen(true)}>
        Open
      </button>

      {modalOpen && (
        <Modal
          onSubmit={(msg) => handleButtonClick(msg)}
          onCancel={(msg) => handleButtonClick(msg)}
          onClose={(msg) => handleButtonClick(msg)}
        >
          <h1>This is the Modal title</h1>
          <p>This is the Modal description</p>
        </Modal>
      )}

      <div className='activity-msg'>
        <h3>{msgDisplay}</h3>
      </div>
    </div>
  )
}

export default App
