import React, { Component } from "react";
// style
import './index.scss';
// image
import logoUrl from '../../assets/images/logo.svg';

export default class Header extends Component {
    render () {
        return (
            <header>
                <div className="logo">
                    <img src={logoUrl} />
                </div>
                <div className="title">
                    <h3>QQ音乐</h3>
                    <p>打开APP收藏下载</p>
                </div>
            </header>
        )
    }
}