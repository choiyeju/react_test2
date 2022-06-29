import React, { Component } from "react";
import { Link } from 'react-router-dom';

// function LifeCycle() {
//     return (
//       <div className="main">
//         <h1>LifeCycle</h1>
//         <div>
//             <h3>constructor</h3>
//             <h3>getDerivedStateFromProps</h3>
//             <h3>render</h3>
//             <h2>componentDidMount</h2>
//             <h2>componentDidUpdate</h2>
//             <h2>componentWillUnmount</h2>
//             <hr/>
//             <h3>getDerivedStateFromProps</h3>
//             <h3>shouldComponentUpdate</h3>
//             <h3>render</h3>
//             <h3>getSnapshotBeforeUpdate</h3>
//             <h2>componentDidUpdate </h2>
//         </div>
//         <Link to='/'>back</Link>
//       </div>
//     );
// }

// export default LifeCycle;

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor 호출");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateProps 호출");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount 호출");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount 호출");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate 호출", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render 호출");

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>에러가 발생하였습니다!!</div>;
    return this.props.children;
  }
}

function getRandomColor() {
  // 랜덤 색상 생성함수(Hex 코드로 반환)
  // 16777215 -> ffffff (16진수)
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default class LifeCycle extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div className="main">
        <h1>LifeCycle</h1>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
        <div>
            <h3>constructor</h3>
            <h3>getDerivedStateFromProps</h3>
            <h3>render</h3>
            <h2>componentDidMount</h2>
            <h2>componentDidUpdate</h2>
            <h2>componentWillUnmount</h2>
            <hr/>
            <h3>getDerivedStateFromProps</h3>
            <h3>shouldComponentUpdate</h3>
            <h3>render</h3>
            <h3>getSnapshotBeforeUpdate</h3>
            <h2>componentDidUpdate </h2>
            <hr/>
        </div>
        <Link to='/'>back</Link>
      </div>
    );
  }
}