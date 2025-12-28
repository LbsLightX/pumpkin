import { Eraser, Slice } from 'lucide-solid';
import { JSX, Signal, createContext, createSignal, useContext } from 'solid-js';

import './ModeSelect.scss';

export enum SelectedTool {
	Pencil,
	Eraser
};

const ModeContext = createContext<Signal<SelectedTool>>();

export const ModeProvider = (props: { children: JSX.Element}) => {
	const selectedTool = createSignal(SelectedTool.Pencil);

	return (
		<ModeContext.Provider value={selectedTool}>
			{props.children}
		</ModeContext.Provider>
	);
};

export const useMode = () => useContext(ModeContext);

const ModeSelect = () => {
	// @ts-ignore
	const [mode, setMode] = useMode();

	return (
		<div class='mode-select'>
			<button
				classList={{
					active: mode() === SelectedTool.Pencil
				}}
				onClick={() => setMode(SelectedTool.Pencil)}
			>
				<Slice />
			</button>
			<button
				classList={{
					active: mode() === SelectedTool.Eraser
				}}
				onClick={() => setMode(SelectedTool.Eraser)}
			>
				<Eraser />
			</button>
		</div>
	)
};

export default ModeSelect;
