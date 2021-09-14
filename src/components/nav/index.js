import React, { Component } from "react";
import { Link } from "react-router-dom";
// style
import './index.scss';

export default class Nav extends Component {
    render () {
        return (
            <nav>
                <ul>
                    <li className="active">
                        <Link to="/">推荐</Link>
                    </li>
                    <li>
                        <Link to="/test">排行</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}