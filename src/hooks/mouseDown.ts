import { Accessor, createSignal } from 'solid-js';

const useMouseDown = (): Accessor<boolean> => {
	const [mouseDown, setMouseDown] = createSignal(false);

	document.addEventListener('mousedown', e => { if (e.button === 0) setMouseDown(true); });
	document.addEventListener('mouseup', e => { if (e.button === 0) setMouseDown(false); });

	return mouseDown;
};

export default useMouseDown;
