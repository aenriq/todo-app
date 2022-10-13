import React, { useState } from "react";
import "./App.css";

function App() {
	let [list, setList] = useState([]);
	let [input, setInput] = useState("");

	function handleChange(event) {
		setInput(event.target.value);
	}

	function handleCheck(event) {
		let tempArr = [...list];
		for (let i of tempArr) {
			if (event.target.value === i.val) {
				i.checked = !i.checked;
				return;
			}
		}
	}

	function addItem() {
		if (input.trim() === "" || checkExists()) return;
		setList([...list, { val: input, checked: false }]);
		setInput("");
	}

	function removeChecked() {
		let tempArr = [...list];
		for (let i = list.length - 1; i >= 0; i--) {
			if (list[i].checked) {
				tempArr.splice(i, 1);
			}
		}
		setList(tempArr);
	}

	function checkExists() {
		for (let i of list) {
			if (i.val === input) {
				return true;
			}
		}
		return false;
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
