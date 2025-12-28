import pumpkinSide from '/pumpkin_side.png';
import { createStore } from 'solid-js/store';
import Canvas from './Canvas';
import ModeSelect from './ModeSelect';
import ButtonGrid from './ButtonGrid';
import Export from './Export';

const makeMatrix = (length: number) =>
	new Array(length).fill(null).map(_ => (
		new Array(length).fill(null).map(_ => false)
	));

function App() {
	const [carved, setCarved] = createStore(makeMatrix(14));

	return (
		<>
			<div class='header'>
				<ModeSelect />
				<Export />
			</div>
			<div class='container'>
				<ButtonGrid setCarved={setCarved} />
				<Canvas carved={carved} />
				<img class='pumpkin' src={pumpkinSide} />
			</div>
			<p>Check out the <a href='https://github.com/LbsLightX/pumpkin'>source code</a>.</p>
		</>
	);
}

export default App;
