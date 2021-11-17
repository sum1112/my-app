import React from "react";

const Search = (props) => {
  var [searchItem, setSearchItem] = React.useState('');
  const handleChange = event => {
    setSearchItem(event.target.value);
    props.onSearch(event);
  }
  return (<div>
    <label htmlFor='search'>Search :</label>
    <input id='search' type='text' onChange={handleChange} />
    <p>
      Searching for <strong>{searchItem}</strong>
    </p>
  </div>
  );
}

const App = () => {

  const handleSearch = event => {
    console.log(event.target.value);
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

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch}/>
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