import { useState } from 'react'
import { Link } from 'react-router-dom'
import TestComponent from '@components/TestComponent'
import './Home.scss'

const Home = () => {
  // This below is called a 'Hook', it allows us to preserve data
  // (as long as the page doesn't get refreshed or closed) and use it
  // inside the HTML, for functions, etc. The value between the
  // parenthesis is the state's default value
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <h1>Test home</h1>
      <p>If you see the Router.js file, this is the component that
         gets rendered for the default route ('/')
      </p>
      <h2>Test Component:</h2>
      <p>Below this paragraph, the test component is being used</p>
      <TestComponent>
        {/* 
          Everything that is put inside the component tags will be the
          prop's children atribute
        */}
        <p>This is a prop child</p>
        <ul>
          <li>And</li>
          <li>This</li>
          <li>List</li>
          <li>As</li>
          <li>Well</li>
        </ul>
        <button>Anything can be a child</button>
        <ol>
          <li>As long</li>
          <li>As you</li>
          <li>Define it</li>
          <li>Properly</li>
        </ol>
      </TestComponent>
      <div className="card">
        <h2>Use State Hook</h2>
        <h4>The below paragraph will change depending on the state:</h4>
        <p>The current count is: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase count
        </button>
      </div>
      <h2>Login page:</h2>
      <Link to='/login'>Go to login</Link>
      <h2>Player Test:</h2>
      <ul>
        <li>
          <Link to='/player/1'>Play song 1</Link>
        </li>
        <li>
          <Link to='/player/2'>Play song 2</Link>
        </li>
        <li>
          <Link to='/player/3'>Play song 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home