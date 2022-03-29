const Search = (props) => {
    const handleChange = (e) => {
    console.log(e.target.value)
    const keyword = e.target.value
    const filterItems = (arr, que) => {
        return arr.filter(el => el.toLowerCase().indexOf(que.toLowerCase()) !== -1)
    }
    props.setFoundCountry(filterItems(props.listOfCountries, keyword))
    }
    return (
      <form>
        <div>
          find countries: <input
              onChange = {handleChange}/>
        </div>
      </form>
    )
}

export default Search