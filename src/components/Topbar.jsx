const Topbar = (props) => {
    console.log("topbar",props.category)
    const handleCategorySelection = (e) => {
        props.setSelection(e.target.value)
    }
    return(
        < div className="top">
            <div >Select Category 
                <select onChange={handleCategorySelection} className="topbar">
                    
                    {props.category.map((c) => <option value={c}>{c}</option> )}
                </select>
            </div>

        </div>
    )
}
export default Topbar