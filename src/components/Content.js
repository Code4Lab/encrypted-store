import React, {Component} from 'react';
import PropTypes  from 'prop-types';

import logo from '../logo.svg';
import './Content.css';

class Content extends Component {
    renderData = () => (
        this.props.all.map((item) => (
            <li>{item}</li>
        ))
    );

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <ul>
                    {this.renderData()}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.props.onLoad();
    }
}

Content.propTypes = {
    onLoad: PropTypes.func.isRequired
};

export default Content;