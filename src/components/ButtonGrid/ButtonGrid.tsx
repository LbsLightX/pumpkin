import { For } from 'solid-js';
import { SetStoreFunction } from 'solid-js/store';
import useMouseDown from '../../hooks/mouseDown';
import { SelectedTool, useMode } from '../ModeSelect/ModeSelect';

import './ButtonGrid.scss';

const makeNumArray = (length: number) => new Array(length).fill(null).map((_, i) => i);

const ButtonGrid = (props: {
	setCarved: SetStoreFunction<boolean[][]>
}) => {
	const mouseDown = useMouseDown();
	const [mode] = useMode();
	const shouldDraw = () => mode() === SelectedTool.Pencil ? true : false;

	const mouseOver = (x: number, y: number) => () => {
		if (mouseDown()) props.setCarved(x, y, shouldDraw());
	};

	return (
		<div class='carver column'>
			<For each={makeNumArray(14)}>
				{x => (
					<div class='row'>
						<For each={makeNumArray(14)}>
							{y => (
								<button
									onMouseOver={mouseOver(x, y)}
									onMouseDown={() => props.setCarved(x, y, shouldDraw())}
								/>
							)}
						</For>
					</div>
				)}
			</For>
		</div>
	)
};

export default ButtonGrid;
