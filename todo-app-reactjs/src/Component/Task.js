import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "react-widget-checkbox";
import "react-widget-checkbox/style";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let datetime = new Date(this.props.task.date).toLocaleString("en-US");
    return (
      <table style={{ padding: 20, background: "#BC8F8F", marginBottom: 20 }}>
        <tr>
          <td>
            <Checkbox
              style={{ marginRight: 10 }}
              onChange={(value) =>
                this.props.onSelectTask(this.props.task.id, value)
              }
              defaultChecked={false}
            ></Checkbox>
          </td>
          <td>{this.props.task.name}</td>
          <td>
            <button style={{ marginLeft: 100, width: 50 }}>edit</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label style={{ fontSize: 13 }}>{datetime}</label>
          </td>
          <td>
            <button style={{ marginLeft: 100, width: 50 }}>delete</button>
          </td>
        </tr>
      </table>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object,
  onSelectTask: PropTypes.func,
};
