import React, { FC, useState } from 'react';
import { Modal } from '../Modal';

interface TodoProps {
	text: string
}

const Todo: FC<TodoProps> = ({ text }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const deleteTodo = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className="card">
			<h2>{text}</h2>
			<div className="actions">
				<button className="btn" onClick={deleteTodo}>Delete</button>
			</div>
			{isModalOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
		</div>
	)
};

export { Todo };
export type { TodoProps }