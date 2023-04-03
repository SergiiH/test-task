import { Task1 } from "./Pages/Task1";
import { Route, Routes } from "react-router-dom";
import { Task2 } from "./Pages/Task2";
import { Navigation } from "./Components/Navigation";

export const App = () => {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<Task1 />} />
				<Route path="/task2" element={<Task2 />} />
			</Routes>
		</div>
	);
};
