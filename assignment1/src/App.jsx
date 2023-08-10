import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from "./components/cards/Cards";
import data from "./assignmentData.json";
// import { useState } from "react";

function App() {
  const [ assignmentData, setAssignmentData ] = useState(data);

  return (
		<>
			<div className="main">
				<div className="con">
					<div className="conTitle">
						<h1>Assignment 1</h1>
						<p>Inigo Rosada {"[000451763]"}</p>
					</div>
					<div>
						<Cards data={assignmentData[0].data}/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App
