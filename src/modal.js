import React from 'react';
const ReactDOM = require('react-dom');
const classnames = require('classnames');
import { Title, Button, FlyModal } from '@getflywheel/local-components';

export default class FlywheelModalExample extends React.Component{
    constructor (props, context) {
       super(props, context);

       if(!document.getElementById('popup-container')) {
		   const container = document.createElement('div');
		   container.id = 'popup-container'; // match id expected in the component
		   document.body.appendChild(container);
	   }

       this.onClick = this.onClick.bind(this);
    }

    onClick () {
    	function confirm (args) {
        	return new Promise((resolve) => {
        		const onSubmit = (checked) => {
        			FlyModal.onRequestClose();
        			resolve(checked);
        		};

        		ReactDOM.render(<FlyModal
        			contentLabel={'Update Media Proxy'}
        			hasIcon={true}
				>
        			<Title>Change Media Proxy Host</Title>
        			<p>Bacon ipsum dolor amet kevin meatloaf chicken pork shoulder alcatra filet mignon kielbasa tri-tip beef ribs.</p>
        		</FlyModal>, document.getElementById('popup-container'));
        	});
        }

        confirm({
			title: <span>Are you sure you want to update WordPress for <span className="__Color__Green">Cool Ass Site</span>?</span>,
			//buttonText: `Update to WordPress 9999`,
		}).then(() => {});
    }

    render () {
        return (
			<Button onClick={this.onClick}>Show Modal</Button>
        );
    }
}
