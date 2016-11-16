import React, {PropTypes, Component} from 'react';

class Footer extends Component {
  renderTodoCount() {
    const {activeCount} = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
      </footer>
    );
  }
}

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
};

export default Footer;
