import React, { Component } from 'react';
import { render } from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </DndProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
