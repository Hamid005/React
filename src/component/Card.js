import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.name)
        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.image} />
                </div>
                <div className="content">
                    <a className="header">{this.props.name}</a>
                    <div className="meta">
                        <span className="date">{this.props.joined}</span>
                    </div>
                    <div className="description">
                        {this.props.disc}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        { this.props.noOfFreind} 22 Friends
                    </a>
                </div>
            </div>
        )
    }
}