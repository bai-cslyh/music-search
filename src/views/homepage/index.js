import React, { Component } from "react";
import { Search, Category } from "../../components";


export default class Hompage extends Component {
    render () {
        return (
            <div>
                <Search/>
                <Category/>
            </div>
        )
    }
}