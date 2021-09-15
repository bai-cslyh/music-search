import React, { Component } from "react";
// style
import './index.scss';

export default class Search extends Component {
    render () {
        return (
            <div className="search">
                <input placeholder="搜索" />
            </div>
        )
    }
}