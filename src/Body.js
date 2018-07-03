import React, {Component} from 'react'
import BodyMainArticle from './BodyMainArticle'
import BodyAsideAd from './BodyAsideAd'

class Body extends React.Component{
    render(){
        return(
                <div>
                <BodyMainArticle/>
                <BodyAsideAd/>
                </div>
        )
    }
}

export default Body