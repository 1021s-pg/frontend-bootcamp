import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  render() {
    const { filter } = this.props;

    return (
      <header>
        <h1>todos</h1>
        <div className="addTodo">
          <input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className={filter == 'all' ? 'active' : ''}>all</button>
          <button className={filter == 'active' ? 'active' : ''}>active</button>
          <button className={filter == 'completed' ? 'active' : ''}>completed</button>
        </nav>
      </header>
    );
  }
  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };

  _onAdd = () => {
    console.log(this.state.labelInput);
    this.setState({ labelInput: '' });
  };
}
