var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  render: function(){
    var {todos} = this.props;

    var renderTodos = () => {
      if (todos.length === 0 ){
        return (
          <p className="container__message">Nothing to do. Yey!</p>
        );
      }

      return todos.map((todo) => <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} /> );
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
