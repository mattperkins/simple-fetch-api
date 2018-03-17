import React from 'react'
import styled from 'styled-components'


// styled components
const Wrapper = styled.div`
margin: 50px 0;
`

// main ("ROOT") component 
export default class Form extends React.Component {
 
 state = {
   title: '',
   body: '' 
 }

onChange = (e) => {
 this.setState({
  [e.target.name] : e.target.value
})
}

//onSubmit = (e) => {
  
//}

// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (

<Wrapper>

<p>Add Post</p>
<form onSubmit={this.onSubmit}>
 <div>
  <label>Title: </label>
  <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
<br />
 </div>
 <div>
  <label>Body: </label>
<br />
  <textarea name="body" onChange={this.onChange} value={this.state.body}/>
 </div>
 <button type="submit">Submit</button>
</form>
</Wrapper>

)// end return
}// end render
}// end component


