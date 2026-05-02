import { calculateInvestmentResults } from '../util/investment';
export default function Results({ input }) {
    const ResultsData = calculateInvestmentResults(input);

    console.log(ResultsData);

    return <p>Results...</p>

}