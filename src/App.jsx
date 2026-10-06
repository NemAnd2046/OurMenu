import { useState } from "react";
import "./App.css";
import { MenuList } from "./components/MenuList";
import { MyHeader } from "./components/MyHeader";

function App() {
	const [count, setCount] = useState(0);
	const [selectedCateg, setSelectedCateg] = useState("all");

	return (
		<div className="bg-gray-800 text-white min-h-screen">
			<header>
				<MyHeader
					selectedCateg={selectedCateg}
					setSelectedCateg={setSelectedCateg}
				/>
			</header>
			<main className="max-w-300 p-4 shadow-2xl m-auto">
				<MenuList selectedCateg={selectedCateg} />
			</main>
		</div>
	);
}

export default App;
