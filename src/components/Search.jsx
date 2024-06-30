function Search(props) {
    function changeData(e)
    {
        props.setSearchterm(e.target.value)
    }
    return (
        <>
            <div className="search">
                <input className="search-bar" name="search" placeholder="Search.." value={props.searchTerm} onChange={changeData} />
                <button className="search-btn" onClick={()=> setSearchterm('')}>
                    <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" height={25} width={25} />
                </button>
            </div>
        </>
    )
}

export default Search
