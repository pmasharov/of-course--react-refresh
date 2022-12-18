import React, { FC } from 'react';

interface TodoProps {
	text: string
}

const Todo: FC<TodoProps> = ({ text }) => (
	<div className="card">
		<h2>{text}</h2>
		<div className="actions">
			<button className="btn">Delete</button>
		</div>
	</div>
);

export { Todo };
export type { TodoProps }