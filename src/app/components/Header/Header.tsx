import * as React from 'react';
// import { TodoTextInput } from 'app/components/TodoTextInput';
// import { TodoModel } from 'app/models/TodoModel';
// import { Link } from "react-router-dom";
import * as style from './style.css'

export interface HeaderProps {
  /* empty */
}

export interface HeaderState {
  /* empty */
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  // private handleSave = (text: string) => {
  //   if (text.length) {
  //     this.props.addTodo({ text });
  //   }
  // };

  render() {
    return (
      <header className={style.header} >
        <h3>Prediction Form</h3>
      </header>
    );
  }
}
