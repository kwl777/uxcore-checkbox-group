/**
 * CheckboxGroup Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let CheckboxGroup = require('../src');
let Item = CheckboxGroup.Item
let Button = require('uxcore-button');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ["air"]
        }
    }

    handleChange(value) {
        this.setState({
            value: value
        })
    }

    handleChange2() {
        this.setState({
            value: ['air']
        })
    }

    render() {
        return (
            <div>
                <CheckboxGroup onChange={this.handleChange.bind(this)} value={this.state.value}>
                    <Item text="天空天空天空" value="air"/>
                    <Item text="大海大海大海" value="sea"/>
                    <Item text="陆地陆地陆地" value="land"/>
                    <Item text="飞机飞机飞机" value="plane"/>
                    <Item text="火车飞机飞机" value="train"/>

                </CheckboxGroup>
                <Button onClick={this.handleChange2.bind(this)}>改变 state</Button>
            </div>
        );
    }
};

module.exports = Demo;
