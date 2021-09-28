import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portFolioStock, handleClickOnFolio}) {
  console.log(portFolioStock)

  const displayedStocks = portFolioStock.map(stock => <Stock 
    key={stock.id} 
    stock = {stock}
    handleAddorDel = {handleClickOnFolio}
  /> )

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        displayedStocks
      }
    </div>
  );
}

export default PortfolioContainer;
