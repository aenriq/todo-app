import React, { useState } from "react";
import "./App.css";

function App() {
	const [list, setList] = useState([]);
	const [input, setInput] = useState("");

	function handleChange(event) {
		setInput(event.target.value);
	}

	function handleCheck(event) {
		const tempArr = [...list];
		tempArr.map((i) => {
			if (event.target.value === i.val) {
				i.checked = !i.checked;
			}
		});
	}

	function addItem() {
		if (input.trim() === "" || checkExists()) return;
		setList([...list, { val: input, checked: false }]);
		setInput("");
	}

	function removeChecked() {
		const tempArr = [...list];
		const removeArr = [];
		tempArr.map((i, index) => {
			if (i.checked) {
				removeArr.push(index);
			}
		});
		setList(
			tempArr.filter((i, index) => {
				return removeArr.indexOf(index) == -1;
			})
		);
	}

	function checkExists() {
		let exist = false;
		list.map((i) => {
			if (i.val === input) {
				exist = true;
			}
		});
		return exist;
	}

	return (
		<div className="App">
			<header className="App-header">
				<div className="inputWrapper">
					<input onChange={handleChange} value={input}></input>
					<button onClick={addItem}>add</button>
					<button onClick={removeChecked}>remove checked</button>
				</div>
				<div>
					{list.map((item) => (
						<div key={item.val} className="inputWrapper">
							<input
								type="checkbox"
								onChange={handleCheck}
								value={item.val}
							></input>
							<div>{item.val}</div>
						</div>
					))}
				</div>
			</header>
		</div>
	);
}

export default App;
