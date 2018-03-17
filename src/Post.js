import React from 'react'
import styled from 'styled-components'


// styled components
const Wrapper = styled.div`
margin: 50px 0;
`

// main ("ROOT") component 
export default class Post extends React.Component {
 state={
  posts: []
}

componentWillMount() {
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(data => this.setState({ posts: data }))
}

// MAIN COMPONENT RENDER
render() {
 const postItems = this.state.posts.map(post => (
  <div key={post.id}>
   <h3>{post.title}</h3>
   <p>{post.body}</p>
  </div>
))
// MAIN COMPONENT RETURN
return (

<Wrapper>

{postItems}

</Wrapper>

)// end return
}// end render
}// end component


