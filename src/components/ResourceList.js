import React, { Component } from 'react'
import axios from 'axios';

export default class ResourceList extends Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com')
    }
    render() {
        return (
            <div>
                {this.props.resource}
            </div>
        )
    }
}