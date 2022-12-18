import React from 'react';
import { Todo, Modal, Backdrop } from "./components";

const App = () => (
	<div className="App" >
		<Todo text={"Refresh React"} />
		<Modal />
		<Backdrop />
	</div>
);

export default App;
