import React, {Component} from 'react'
import './header.less'

class Header extends Component{
    render(){
        return (
            <div className = "components-header row">
                <img src="/static/images/music-logo.gif" width="50" alt="" className="logo -col-auto"/>
                <h1 className = "caption" >Music player</h1>
            </div>
        )
    }
}

export default Header;