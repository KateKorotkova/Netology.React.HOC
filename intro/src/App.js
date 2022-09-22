import React, {useState} from 'react';
import styles from './App.css';
import {TaskWithDate} from './components/firstTask/taskWithDate';
import {TaskWithViews} from './components/secondTask/taskWithViews';


export default function App() {
    let firstTask = true;
    return (
        <>
            {firstTask === true ? <TaskWithDate /> : <TaskWithViews/> }
        </>
    );
}