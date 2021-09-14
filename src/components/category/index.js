import React, { Component } from "react";
import Api from '../../api/resource';
// style
import './index.scss';

export default class Category extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.initHomePage();
    }

    initHomePage () {
        const param = {
            cgiKey: 'GetHomePage',
            _: 1631608438671,
            data: JSON.stringify({"comm":{"g_tk":5381,"uin":"","format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"MusicHallHomePage":{"module":"music.musicHall.MusicHallPlatform","method":"MobileWebHome","param":{"ShelfId":[101,102,161]}},"hotkey":{"module":"tencent_musicsoso_hotkey.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"remoteplace":"txt.miniapp.wxada7aab80ba27074","searchid":"1559616839293"}}})
        }
        Api.getHomePageResource(param).then((res) => {
            if (res.code == 0) {
                this.setState(res);
            }
        });
    }

    render () {
        return (
            <div className="mode">
                <div className="mode-tit">
                    <h3>达人歌单</h3>
                </div>
                <div className="mode-box">
                    <ul className="mode-list">
                        <li className="mode-item">
                            <div className="mode-list-box">
                                <div className="mode-list-media">
                                    <img className="mode-list-img" src="https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1" />
                                </div>
                                <h3 className="mode-list-tit">欧美| 流行节奏控</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}