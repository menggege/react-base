import React from 'react';
import ReactDOM from 'react-dom';

// 样式文件引入
import './style.scss'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
