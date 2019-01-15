import React from 'react';
import './Message.css';

const Message = (props) => (
    <div className='Message'>
        <h3>{props.children}</h3>
    </div>
);

export default Message;