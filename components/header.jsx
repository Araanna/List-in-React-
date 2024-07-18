import React from 'react'

const Header = ({name, address}) => {
  return (
    <div>
        <h1>Company Name {name}</h1>
        <h1>Company Address {address}</h1>
    </div>
  )
}

export default Header;
