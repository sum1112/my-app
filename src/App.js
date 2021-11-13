import React from "react";

const list = [
  {
    title : 'React',
    url : 'https://reactjs.org/',
    author : 'Jordan Walks',
    num_comments : 3,
    points : 4, 
    objectID : 0,
  },
  {
    title : 'Redux',
    url : 'https://reactjs.org/',
    author : 'Dan Abranov, Andrew clark',
    num_comments : 2,
    points : 5, 
    objectID : 1,
  }
]
const Search = () => (
<div>
  <label htmlFor='search'>Search : </label>
  <input id='search' type='text'></input>
</div>
);

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
  </div>
);

const List = () => list.map(item => (
  <div key={item.objectID}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
));


export default App;