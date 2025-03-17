import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  // this.handleH1Click = this.handleH1Click.bind(this);
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        tittle: "O título 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        tittle: "O título 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        tittle: "O título 3",
        body: "O corpo 3",
      },
    ],
  };
  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].tittle = "O título mudou";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 500);
  };
  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h2>{counter}</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.tittle}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

// function App() {
//   const [count, setCount] = useState(0)

// return (
//   <>
//     <div>
//       <a href="https://vite.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )
// }

// export default App
