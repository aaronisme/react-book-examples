import React, { Component, PropTypes, cloneElement } from 'react';
import styles from '../css/style.scss';
import TabNav from './TabNav'
import classnames from 'classnames';
//import TabContent from './TabContent'


class Tab extends Component {
    constructor(props) {
        super(props);
        const currProps = this.props;

        this.handleTabClick = this.handleTabClick.bind(this);

        let activeIndex = currProps.activeIndex;
        this.state = {
            activeIndex: activeIndex
        }
    }

    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {},
    };


    handleTabClick(activeIndex){
        const prevIndex = this.state.activeIndex;
        this.setState({
            activeIndex: activeIndex,
            prevIndex: prevIndex
        })
    }


    renderTabNav() {
        const {classPrefix,children} = this.props;

        return (
            <TabNav
             key="tabBar"
             classPrefix={classPrefix}
             panels={children}
             onTabClick ={this.handleTabClick}
             activeIndex={this.state.activeIndex}
            />
        )
    }

    //renderTabContent() {
    //    const {classPrefix,children} = this.props;
    //    return (
    //        <TabContent
    //         classPrefix={classPrefix}
    //         panels={children}
    //         activeIndex={this.state.activeIndex}
    //        />
    //    )
    //}

    render(){
        return (
            <div>
                {this.renderTabNav()}
            </div>
        )
    }
}

export default Tab;