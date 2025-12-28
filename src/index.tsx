/* @refresh reload */
import { render } from 'solid-js/web';
import App from './components/App';
import { ModeProvider } from './components/ModeSelect/ModeSelect';

import './styles/index.scss';

const root = document.getElementById('root');

render(() => (
	<ModeProvider>
		<App />
	</ModeProvider>
), root!);
