import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './App';
import Routes from './Route';
import {Router,browserHistory} from 'react-router';


render(<Router history={browserHistory}>{Routes}</Router>,document.getElementById("root"));
