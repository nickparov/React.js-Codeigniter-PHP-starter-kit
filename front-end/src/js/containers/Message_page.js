import React, { Component } from 'react';
import Message from '../components/Message/Message';

class Message_page extends Component {

    constructor(props) {
        super(props);

        this.state = {
            last_save: this.props.last_save
        }
    }
        
    componentDidMount() {
        console.log('mounted');
    }

    render() {
        return( 
            <Message>
                Hello {this.state.last_save.character}, <br/>
                You stopped at the {this.state.last_save.location} last time
            </Message>
        )
    }
}

export default Message_page;