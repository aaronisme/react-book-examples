import React,{Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {

    render() {
        return (
            <div>
                <select>Please choose the tab
                    <option value="0">Tab1</option>
                    <option value="1">Tab2</option>
                    <option value="0">Tab3</option>
                </select>
                <Tab>
                    <TabPane>This is the first Tab</TabPane>
                    <TabPane>This is the Second Tab</TabPane>
                    <TabPane>This is the Third Tab</TabPane>
                </Tab>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));