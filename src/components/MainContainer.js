import {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  //states
  const [displayStock, setDisplayStock] = useState([])
  const [portFolioStock, setPortFolioStock] = useState([])
  const [searchSort, setSearchSort] = useState('ABC')
  const [searchFilter, setSearchFilter] = useState('Tech')

  useEffect(() => {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => setDisplayStock(data))
  },[])



  //functions

  function handleAddToFolio(stock){
    console.log(stock.id)
    let stockId = stock.id
    let displayOnFolio = displayStock.find(disStock => disStock.id === stockId)
      setPortFolioStock([...portFolioStock, displayOnFolio])  
    // console.log(displayOnFolio)
  }

  function handleClickOnFolio(stockDel){
    let deleteFromFolio = portFolioStock.filter(delStock => delStock.id !== stockDel.id )
    setPortFolioStock(deleteFromFolio)
  }

  return (
    <div>
      <SearchBar searchSort={searchSort} setSearchSort={setSearchSort}  setSearchFilter={setSearchFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer displayStock={displayStock} handleAddToFolio={handleAddToFolio} searchFilter={searchFilter} searchSort={searchSort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portFolioStock={portFolioStock} handleClickOnFolio={handleClickOnFolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
