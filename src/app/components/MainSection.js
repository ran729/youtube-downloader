import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  renderFooter(completedCount) {
    const {todos} = this.props;
    const activeCount = todos.length;

    if (todos.length) {
      return (
        <Footer
          activeCount={activeCount}
          />
      );
    }
  }

  render() {
    const {todos, actions} = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo =>
            <TodoItem
              key={todo.etag}
              todo={todo}
              {...actions}
              />
          )}
        </ul>
        {this.renderFooter(todos.length)}
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
