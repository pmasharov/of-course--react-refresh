import React, { FC } from 'react';

interface BackdropProps { }

const Backdrop: FC<BackdropProps> = () => (
  <div className="backdrop" />
)

export { Backdrop };
export type { BackdropProps };
