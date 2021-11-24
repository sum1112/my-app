import React from "react";

const Search = ({searchTerm, onSearch}) => {
  console.log('render');
  const handleChange = event => {
    onSearch(event);
    localStorage.setItem('search', event.target.value);
  }
  return (<div>
    <label htmlFor='search'>Search :</label>
    <input id='search' type='text' onChange={handleChange} value={searchTerm}/>
    <p>
      Searching for <strong>{searchTerm}</strong>
    </p>
  </div>
  );
}

const App = () => {

  var [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );
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

const List = ({list}) => list.map(item => (<Item key={item.objectID} item={item}/>));

const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);


export default App;