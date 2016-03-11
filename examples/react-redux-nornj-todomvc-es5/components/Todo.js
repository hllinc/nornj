﻿nj.registerComponent('Todo', React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  },

  template: nj.compileComponent(TodoTmpl),

  click: function () {
    this.props.onClick(this.props.index);
  },

  render: function () {
    return this.template(
      [
        this.props,
        { click: this.click }
      ]
    );
  }
}));