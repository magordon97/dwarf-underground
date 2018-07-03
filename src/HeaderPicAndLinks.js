import React, {Component} from 'react'

class HeaderPicAndLinks extends React.Component{
    render(){
        return(
            <div className="expanded row header">
                <div className="clearfix">
                    <div className="float-left logo">
                        <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
                    </div>
                    <div className="float-right nav-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Log in</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderPicAndLinks