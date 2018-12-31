import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, { createGlobalStyle } from 'styled-components'
import Post from './Post'
import Form from './Form'
// eslint-disable-next-line
createGlobalStyle`
body {
font-family: sans-serif;
background: #f7f7f7;
}
`

// styled components
const Wrapper = styled.div`
 margin: 100px;
`

// main ("ROOT") component
export default class Root extends Component {
  // MAIN COMPONENT RENDER
  render () {
    // MAIN COMPONENT RETURN
    return (

        <Wrapper>
          <Form />
          <Post />

      </Wrapper>

    )// end return
  }// end render
}// end component

ReactDOM.render(<Root />,
  document.getElementById('root'))
registerServiceWorker()
