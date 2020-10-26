import React from 'react';
import "./App.css";
import Todo from "./components/todo/Todo";
import Header from "./components/header/Header";

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Todo/>
        </React.Fragment>
    )
};

export default App;
