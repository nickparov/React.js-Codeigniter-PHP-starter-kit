import ReactDOM from 'react-dom';
import React from 'react';
import Message_page from './js/containers/Message_page';

import { BrowserRouter } from 'react-router-dom'; 

// Data received from the server after generating the page //
console.log(SERVER_DATA);

const App = (
    <BrowserRouter>
        <Message_page last_save={SERVER_DATA.last_save} />
    </BrowserRouter>
);

ReactDOM.render( App, document.getElementById('root'));