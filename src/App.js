import React from "react";

const Search = (props) => {
  const handleChange = event => {
    props.onSearch(event);
  }
  return (<div>
    <label htmlFor='search'>Search :</label>
    <input id='search' type='text' onChange={handleChange} value={props.searchTerm}/>
    <p>
      Searching for <strong>{props.searchTerm}</strong>
    </p>
  </div>
  );
}

const App = () => {

  var [searchTerm, setSearchTerm] = React.useState('R');
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

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
  const searchStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} searchTerm={searchTerm}/>
      <hr />
      <List list={searchStories}/>
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