import { Link } from 'react-router-dom'


const Login = () => {
  return(
    <div>
      <h1>Login Page goes here</h1>
      {/* 
        This below is the link to move between routes by keeping the
        browser's state:
       */}
      <Link to='/'>Go home</Link>
      {
        // * As mentioned above, it is only the browser's state, any
        // * component state inside other route will be deleted
      }
    </div>
  )
}

export default Login