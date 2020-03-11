import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router.jsx';

ReactDom.render(
    getRouter(), document.getElementById('root'));