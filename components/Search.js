import React, { Component } from 'react'
//import { useRouter } from 'next/navigation'
import { withRouter } from 'next/router'
//import { withRouter } from 'react-router-dom'

class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            textSearch: '',
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('====getDerivedStateFromProps===')
        // console.log('nextProps -->', nextProps)
        // console.log('prevState -->', prevState)
        // return {
        //     textSearch: 'new state',
        // };
    }


    componentDidMount() {// call service
        console.log('===componentDidMount===')
        
        // this.setState({ textSearch: ''})
        require('react-dom');
        window.React2 = require('react');
        console.log(window.React1 === window.React2);
    }

    componentDidUpdate(prevProps, prevState) {// รู้ได้ว่าก่อนหลังเกิดไรขึ้น
        console.log('===componentDidUpdate===')
        console.log('prevProps -->', prevProps)
        console.log('prevState -->', prevState)
        console.log('nextState -->', this.state)
    }

    componentWillUnmount() {
        console.log('===componentWillUnmount===')
    }

    handleChangeText = (event) =>{
        console.log("-->", event.target.value)
        this.setState({textSearch:event.target.value}) //setStateทุกครั้งเมื่อมีการonchange
    }

    goToTestPage = () => {
        const { router } = this.props
        //const { router } = useRouter()
        console.log('router ',{ router })
        router.push('/test')
    }

    render() {
        console.log("this state render ",this.state)
        return (
            <div>
                {this.props.children} <input type='text'value={this.state.textSearch} onChange={this.handleChangeText}/>
                <button onClick={this.goToTestPage}>go to test page</button>
            </div>
        )
    }
}

export default withRouter(Search)
//export default Search