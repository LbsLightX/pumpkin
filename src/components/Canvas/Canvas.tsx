import { createEffect } from 'solid-js';

import './Canvas.scss';

/**
 * Handles the drawing of the carved pixels
 */
const Canvas = (props: { carved: boolean[][] }) => {
	// Handle the canvas
	let canvas: HTMLCanvasElement | undefined;

	createEffect(() => {
		if (!canvas) return;

		// TODO: Memoize the context
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Clear the existing pixels
		ctx.clearRect(0, 0, 16, 16);

		// Fill in the new pixels
		ctx.fillStyle = '#441300';
		let y = 0;
		for (const row of props.carved) {
			let x = 0;
			for (const fill of row) {
				if (fill) ctx.fillRect(x, y, 1, 1);

				x++;
			}

			y++;
		}

		// Add the Shadow
		ctx.fillStyle = '#2d000e';
		y = 0;
		for (const row of props.carved) {
			let x = 0;
			for (const fill of row) {
				if (fill) {
					// Check if the pixel to the top left is empty
					if (y === 0 || x === 0) ctx.fillRect(x, y, 1, 1);
					
					// If the pixel to the top right of the current pixel is empty, add a shadow
					if (y > 0 && x > 0  && !props.carved[y-1][x-1]) ctx.fillRect(x, y, 1, 1);
				}

				x++;
			}

			y++;
		}
	});

	return (
		<canvas ref={canvas} height={14} width={14} id='carved' />
	);
};

export default Canvas;
