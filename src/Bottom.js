import React, {Component} from 'react'

import BottomArticles from './BottomArticles'

class Bottom extends React.Component{
    render(){
        return(

<div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        <BottomArticles />
      </div>
        )
    }
}

export default Bottom