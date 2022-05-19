import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}

export default Layout
