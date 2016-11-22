import React, {PropTypes, Component} from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(text) {
    if (text.length !== 0) {
      this.props.search(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Youtube Downloader</h1>
        <TodoTextInput
          newTodo
          onSave={this.search}
          placeholder="Search youtube videos"
          />
      </header>
    );
  }
}

Header.propTypes = {
  search: PropTypes.func.isRequired
};

export default Header;
