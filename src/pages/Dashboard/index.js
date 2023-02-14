import { useState } from "react";
import { useNavigate } from "react-router-dom";
import stockData from "../../stock-data.js";
import "./index.css";

const DashboardPage = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [stocks, setStocks] = useState(stockData);

  const handleClick = (stockSymbol) => {
    navigate(`/stocks/${stockSymbol}`);
  };

  let stockTable = stocks.map((stock) => {
    return (
      <tr key={JSON.stringify(stock)} onClick={() => handleClick(stock.symbol)}>
        <td>{stock.symbol}</td>
        <td>{stock.name}</td>
        <td>${stock.lastPrice}</td>
        <td className={stock.change < 0 ? "red" : "green"}>{stock.change}</td>
      </tr>
    );
  });

  return (
    <div className="page-container">
      <h1 id="dashboard-title">Stocks Dashboard</h1>
      <table id="stock-table">
        <tbody>
          <tr>
            <th>Symbol</th>
            <th>Company</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
          {stockTable}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
