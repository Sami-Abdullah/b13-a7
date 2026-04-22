
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = ({data}) => {
 

  return (
    <>
      <Doughnut data={data}></Doughnut>
    </>
  );
};

export default PieChart;