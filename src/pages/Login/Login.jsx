import { Link } from 'react-router-dom'
import './Login.scss'
import LoginForm from '@components/LoginForm'

const Login = () => {
  return (
    // <div>
    //   <h1>Login Page goes here</h1>
    //   {/*
    //     This below is the link to move between routes by keeping the
    //     browser's state:
    //    */}
    //   <Link to='/'>Go home</Link>
    //   {
    //     // * As mentioned above, it is only the browser's state, any
    //     // * component state inside other route will be deleted
    //   }

    <div id='bodyLogin'>
      <main>
        <div id='HeaderFormLogin'>{/* <h1>SIBU</h1> */}</div>

        <div id='FormLogin'>
          <LoginForm />
        </div>
      </main>
    </div>
    // </div>
  )
}

export default Login
