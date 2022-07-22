import "./searchBar.css"

function SearchBar({ searchedData, onSearch }) {
  return (
    <div className="search-bar">
      <label>Search</label>
      <input type="text" placeholder="Search User" value={searchedData} onChange={e => onSearch(e.target.value)} />
    </div>
  );
}

export default SearchBar;
