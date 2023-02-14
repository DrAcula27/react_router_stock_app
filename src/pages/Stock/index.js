import React from "react";
import { useParams } from "react-router-dom";
import stockData from "../../stock-data";
import "./index.css";

const StockPage = () => {
  let { symbol } = useParams();

  let currentStock = stockData.find((element) => element.symbol === symbol);

  return (
    <div>
      <h1>
        {currentStock.name} ({currentStock.symbol})
      </h1>
      <h2>Current Price: ${currentStock.lastPrice}</h2>
      <table id="current-stock-table">
        <tbody>
          <tr>
            <th>Opening</th>
            <th>Highest</th>
            <th>Lowest</th>
            <th>Change</th>
          </tr>
          <tr>
            <td>${currentStock.open}</td>
            <td>${currentStock.high}</td>
            <td>${currentStock.low}</td>
            <td className={currentStock.change < 0 ? "red" : "green"}>
              {currentStock.change}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockPage;
