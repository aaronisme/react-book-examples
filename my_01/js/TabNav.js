import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';

class TabNav extends Component {

    getTabs() {
        const {panels, classPrefix, activeIndex } = this.props;
        return React.Children.map(panels, (child)=> {
            if (!child) {
                return;
            }

            const order = parseInt(child.props.order, 10);
            let classes = classnames({
                [`${classPrefix}-tab`]: true,
                [`${classPrefix}-active`]: activeIndex == order,
                [`${classPrefix}-disabled`]: child.props.disabled
            });

            let events = {};
            if (!child.props.disabled) {
                events = {
                    onClick: this.props.onTabClick.bind(this, order)
                }
            }

            let refs = {};
            if (activeIndex == order) {
                refs = {
                    ref: 'activeTab'
                }
            }
            return (<li
                role="tab"
                aria-disabled={child.props.disabled ? 'true':'false'}
                aria-selected={activeIndex == order ? 'true':'false'}
                className={classes}
                {...events}
                {...refs}
            >          {child.props.tab}

            </li>)
        })
    }

    render() {
        const {classPrefix} = this.props;

        const rootClasses = classnames({
            [`${classPrefix}-bar`]: true
        });

        const classes = classnames({
            [`${classPrefix}-nav`]: true
        });
        return (
            <div className={rootClasses}>
                <ul className={classes}>
                    {this.getTabs()}
                </ul>
            </div>
        )
    }

}

export default TabNav;