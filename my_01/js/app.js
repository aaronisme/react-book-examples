import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDom from 'react-dom';
import Tab from './Tabs'
import TabPane from './TabPane';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            activeIndex: 0
        }
    }

    handleChange(e) {
        this.state.activeIndex = parseInt(e.target.value, 10);
    }

    render() {
        return (
            <div>
                <select value={this.state.activeIndex} onChange={this.handleChange}>Please choose the tab
                    <option value="0">Tab1</option>
                    <option value="1">Tab2</option>
                    <option value="0">Tab3</option>
                </select>
                <Tab activeIndex={this.state.activeIndex} className="tabs-bar">
                    <TabPane order="1" tab="tab1">This is the first Tab</TabPane>
                    <TabPane order="2" tab="tab2">This is the Second Tab</TabPane>
                    <TabPane order="3" tab="tab3">This is the Third Tab</TabPane>
                </Tab>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));