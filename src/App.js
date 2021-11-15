import React from "react";

const Search = () => {
  
  const handleChange = event => {
    console.log(event.target.value);
  }
  return (<div>
    <label htmlFor='search'>Search :</label>
    <input id='search' type='text' handleChange={handleChange} />
  </div>
  );
}

const App = () => {
  const stories = [
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

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories}/>
    </div>
  );
}

const List = (props) => props.list.map(item => (
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