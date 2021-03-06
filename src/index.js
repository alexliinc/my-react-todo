import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory} from 'react-router'
import routes from './config/routes'


ReactDOM.render(<Router routes={routes} history={browserHistory}/>, document.getElementById('root'));
registerServiceWorker();
