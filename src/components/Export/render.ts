const render = (): string => {
	// It's *probably* not the best idea to use a query selector, but it works in this situation and it's simple.
	const carvedCanvas = document.querySelector<HTMLCanvasElement>('canvas#carved');
	if (!carvedCanvas) throw new Error('carvedCanvas is undefined');

	// Get the pumpkin
	const img = document.querySelector<HTMLImageElement>('img.pumpkin');
	if (!img) throw new Error('img is undefined');

	// Compose it all onto a new canvas
	const canvas = document.createElement('canvas');
	canvas.width = 16; canvas.height = 16;
	const ctx = canvas.getContext('2d');

	if (!ctx) throw new Error('ctx is undefined');

	ctx.drawImage(img, 0, 0);
	ctx.drawImage(carvedCanvas, 1, 1);

	return canvas.toDataURL('image/png');
};

export default render;