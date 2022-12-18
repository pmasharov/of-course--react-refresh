import React, { FC } from 'react';

interface ModalProps { }

const Modal: FC<ModalProps> = () => (
  <div className='modal'>
    <h2>Are you sure?</h2>
    <button className="btn btn--alt">Cancel</button>
    <button className="btn">Confirm</button>
  </div>
)

export { Modal }