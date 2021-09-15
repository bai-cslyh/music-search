import React, { Component } from "react";
import Api from '../../api/resource';
import classnames from 'classnames'
// style
import './index.scss';

const Item = (props) => {
    let itemClass = classnames('mode-item', {'video': props.type=='1_58_0'});
    return (
        <li className={itemClass}>
            <div className="mode-list-box">
                <div className="mode-list-media">
                    <img className="mode-list-img" src={props.value.cover} />
                </div>
                <h3 className="mode-list-tit">{props.value.title}</h3>
            </div>
        </li>
    )
}

class CategoryItem extends Component {
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
            if (res.code === 0) {
                this.setState(res);
            }
        });
    }
    render () {
        let listData = this.state.MusicHallHomePage ? this.state.MusicHallHomePage.data.v_shelf : [];
        const list = listData.map((listDataChild, index) => {
            return (
                <div className="mode" key={index}>
                    <div className="mode-tit">
                        <h3>{listDataChild.title_template}</h3>
                    </div>
                    <div className="mode-box">
                        <ul className="mode-list">
                            {listDataChild.v_niche[0].v_card.map((item, childIndex) => {
                                return (<Item value={item} type={listDataChild.tjreport} key={childIndex}/>)
                            })}
                        </ul>
                    </div>
                </div>
            )
        })

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default class Category extends Component {
    render () {
        return (
            <CategoryItem/>
        )
    }
}