import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import TestComponent from "./TestComponent"

const name = "hello";
let nameChange: string = "hello2";
nameChange = "hello3";

let array1 = [true, false, true];
let array2 = [0.1, 1, "hello", true];

interface NAME {
  first: string;
  last: string;
}
let nameObj: NAME = { first: "Ichikawa", last: "Tomoki" }

const func1 = (x: number, y: number): number => {
  return x + y;
}

// Interseption Types
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const UserA: USER = {
  age: 30,
  city: "tokyo",
  username: "example",
  password: "password"
}

type KEYS = {
  primary: string;
  secondary: string;
}

let key: keyof KEYS
key = "primary";

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
}

let keySports: keyof typeof SPORTS;

enum OS {
  Windows,
  Mac,
  linux,
}

interface PC {
  id: number;
  OSType: OS;
}


const PC1: PC = {
  id: 1,
  OSType: OS.Windows
}
const PC2: PC = {
  id: 2,
  OSType: OS.Mac
}
const PC3: PC = {
  id: 3,
  OSType: OS.linux
}

interface GEN<T> {
  item: T,
}

const gen1: GEN<string> = { item: "hello" };

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello hello" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
