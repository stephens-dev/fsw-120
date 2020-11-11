import logo from './logo.svg';
import React from 'react'
import './App.css';
import Tweet from './Tweet'
// import Postdata from './Postdata'

class App extends React.Component {
  constructor() {
    super()
      this.state ={
        "id": 4,
        "Postdata": [
          {
              "id": 1,
              "title": "Lorem ipsum",
              "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. Dictum at tempor commodo ullamcorper a lacus. Non arcu risus quis varius. Netus et malesuada fames ac turpis egestas integer. Sed augue lacus viverra vitae. Turpis cursus in hac habitasse platea dictumst quisque sagittis.",
              "name": "Lorem ipsum"
          },
          {
              "id": 2,
              "title": "Lorem ipsum",
              "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. Dictum at tempor commodo ullamcorper a lacus. Non arcu risus quis varius. Netus et malesuada fames ac turpis egestas integer. Sed augue lacus viverra vitae. Turpis cursus in hac habitasse platea dictumst quisque sagittis.",
              "name": "Lorem ipsum"
          },
          {
              "id": 3,
              "title": "Lorem ipsum",
              "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. Dictum at tempor commodo ullamcorper a lacus. Non arcu risus quis varius. Netus et malesuada fames ac turpis egestas integer. Sed augue lacus viverra vitae. Turpis cursus in hac habitasse platea dictumst quisque sagittis.",
              "name": "Lorem ipsum"
          },
          {
              "id": 4,
              "title": "Lorem ipsum",
              "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat ac. Dictum at tempor commodo ullamcorper a lacus. Non arcu risus quis varius. Netus et malesuada fames ac turpis egestas integer. Sed augue lacus viverra vitae. Turpis cursus in hac habitasse platea dictumst quisque sagittis.",
              "name": "Lorem ipsum"
          }
      ]
      }
  }

  //  Blog = () => {return this.state.Postdata.map(blog => {
  //   return <Tweet key={blog.id} title={blog.title} content={blog.content} name={blog.name}/>
  // })}

  Delete = (tweetId) => {
    console.log(tweetId)
    this.state.Postdata.forEach((tweet) => {
      if (tweet.id == tweetId) {console.log(tweetId)
        this.state.Postdata.splice(this.state.Postdata.indexOf(tweet),1)
        this.setState({
          Postdata: this.state.Postdata
        })
      }
    }) 
  }
  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
    Submit = () => {

      let Title = document.getElementById("Title").value
      let Content = document.getElementById("Content").value 
      let Name = document.getElementById("Name").value
      this.state.Postdata.push({title: Title,
                                  content: Content,
                                  name: Name,
                                  id: this.state.id+1})

      this.setState({
      Postdata: this.state.Postdata,
      id: this.state.id+1
      })
    }
  render() {
    return(
      <div>
        <div className="inputs">
          <input
          placeholder="Title"
          id="Title"
          name="Temp"
          // onChange={this.handleChange}
          />
          <input
          id="Content"
          placeholder="Content"
          name="Temp"
          // onChange={this.handleChange}

          />
          <input
          id="Name"
          placeholder="Name"
          name="Temp"
          // onChange={this.handleChange}

          />
          <button onClick={this.Submit}>Post</button>
          
        </div>
          {this.state.Postdata.map(blog => {
    return <Tweet  id={blog.id} Delete={this.Delete} key={blog.id} title={blog.title} content={blog.content} name={blog.name}/>
  })}
      </div>
    )
  }
}
export default App;
