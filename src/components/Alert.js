import React from 'react'

export default function Alert(props) {
    let capitalize=(str)=>{
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${capitalize(props.alert.type)} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.type}</strong>{props.alert.msg}
      </div>}
    </div>
  )
}
