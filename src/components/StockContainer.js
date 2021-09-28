import React from "react";
import Stock from "./Stock";

function StockContainer({displayStock, handleAddToFolio, searchFilter, searchSort}) {

  const filterStocks = displayStock.filter(stock => {
    return stock.type === searchFilter
  })

  const searchStocks = filterStocks.sort((a,b) => {
    if(searchSort === 'ABC'){
      return a.name.localeCompare(b.name)
    }else{
      return a.price - b.price
    }
  })



  const renderedStocks = searchStocks.map(stock => <Stock 
    key = {stock.id}
    stock = {stock}
    handleAddorDel = {handleAddToFolio}
  />)

  return (
    <div>
      <h2>Stocks</h2>
      {renderedStocks}
    </div>
  );
}

export default StockContainer;
