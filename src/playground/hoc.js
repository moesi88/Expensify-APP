// higher order comp (hoc) is a comp tht render other normal comp(s)
// reuse code
// render  hijacking
// prop manipulation
// abstract state
import React from 'react'
import ReactDOM from 'react-dom'

const Info = props => (
  <div>
    <h1>info</h1>
    <p>the info is {props.info}</p>
  </div>
)

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>this is pvt info . please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  )
}
const AdminInfo = withAdminWarning(Info)

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>plz login to view the info </p>
      )}
    </div>
  )
}
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(
//   <AdminInfo isAdmin info='this is the details' />,
//   document.getElementById('app')
// )
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info='this is the details' />,
  document.getElementById('app')
)
