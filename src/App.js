import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Details from './components/Details'
import UserForm from './components/UserForm'

const App = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/" exact={true}><UserForm /></Route>
            <Route path="/details"><Details /></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
