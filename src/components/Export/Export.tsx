import { Download } from 'lucide-solid';
import render from './render';
import downloadURI from './downloadURI';

import './Export.scss';

const Export = () => {
	const exportFile = () => {
		const dataURI = render();
		downloadURI(dataURI, 'carved_pumpkin.png');
	};

	return (
		<button class='export'>
			<Download onClick={exportFile} />
		</button>
	);
};

export default Export;