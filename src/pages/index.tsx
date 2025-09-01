// pages/index.js
import { useState } from 'react';
import './styles.css'; // Import the CSS file for styles

const CalculatePage = () => {
  const [salary, setSalary] = useState('');
  const [fixedCosts] = useState(1471);
  const [myIncome] = useState(2975);
  const [amountToPay, setAmountToPay] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const salaryNum = parseFloat(salary);
    const myIncomeNum = parseFloat(myIncome.toString());
    
    if (isNaN(salaryNum) || salaryNum < 0 || isNaN(myIncomeNum) || myIncomeNum <= 0) {
      alert('Please enter valid income values.');
      return;
    }

    const totalIncome = myIncomeNum + salaryNum;
    const percentageOfTotal = salaryNum / totalIncome;
    const shareToPay = fixedCosts * percentageOfTotal;

    setAmountToPay(shareToPay.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Vaste lasten calculator</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label>
            Salaris:
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {amountToPay !== '' && (
        <div className="result">
          <h2>Maand bedrag is: €{amountToPay}</h2>
        </div>
      )}
    </div>
  );
};

export default CalculatePage;
