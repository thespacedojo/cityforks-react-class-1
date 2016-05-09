import React from 'react'

const AppContainer = ({children}) => (
  <div className="appContainer">

    <header className="bar bar-nav">
      <h1 className="title">CityForks</h1>
    </header>
    {children}

  </div>
)

export default AppContainer;
