import React, { FC } from 'react';
import { Backdrop } from './Backdrop';

interface ModalProps {
  onCancel(): void
  onConfirm(): void
}

const Modal: FC<ModalProps> = ({
  onCancel,
  onConfirm
}) => {
  const cancelHandler = () => {
    onCancel()
  }
  const confirmHandler = () => {
    onConfirm()
  }

  return (
    <>
      <div className='modal'>
        <h2>Are you sure?</h2>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
        <button className="btn" onClick={confirmHandler}>Confirm</button>
      </div>
      <Backdrop />
    </>
  )
}

export { Modal, Backdrop }