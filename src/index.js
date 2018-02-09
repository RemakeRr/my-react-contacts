import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import ContactsList from './App';
import './index.css';


ReactDOM.render(
    <div>
        <ContactsList/>
    </div>,
    document.getElementById('root')
);

registerServiceWorker();
