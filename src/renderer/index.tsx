import { createRoot } from 'react-dom/client';
import App from './pages/App';
import store from '../store/store';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import {Provider} from 'react-redux'
import grep from '../store/grep'

const {setOutput} = grep.actions;

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.on('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  store.dispatch(
    setOutput(arg)
  )
});
