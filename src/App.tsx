import React from 'react';
import { Todo } from "./components";

const App = () => (
	<div className="App" >
		<h2>Todos</h2>
		<Todo text={"Refresh React"} />
	</div>
);

export default App;
