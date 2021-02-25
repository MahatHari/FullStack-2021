import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ text, value }) => {
    
    return (

        <table 
    >
            
            <tbody>
                <tr >
                    <td >{text}   {    }</td>
                    <td>{isNaN(value) ? 0 : value}</td>
                </tr>
               

            </tbody>
        </table>
    )
   
        
}
//Using destructring  in props 
const Statistics = ({ good, bad, neutral, all, average, positive }) => {
    //conditional rendering if no feedback is given
    if (all === 0) {
       return( <p>
            No Feedback Given
        </p>)
    }
    return (
         <div>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutra" value={neutral} />
            <Statistic text="Bad" value={bad} />
            
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positive} />
             <Statistic text="All" value={all}/>
        </div>
    )
}
const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll]=useState(0)

    const average = (good - bad) / all;
    const positive = (good / all) * 100;

    const addGood=() => {
        setGood(good + 1)
        setAll(all+1)
    }
    const addBad = () => {
        setBad(bad + 1)
        setAll(all+1)
    }
    const addNeutral = () => {
        setNeutral(neutral + 1)
        setAll(all+1)
    }
    
    return (
        <div>
            <h2>
                Give Feedback
            </h2>
            <Button handleClick={addGood} text="Good" />
            <Button handleClick={addBad} text="Bad" />
            <Button handleClick={addNeutral} text="Neutral" />
            
            <h3>Statistics</h3>
            <Statistics good={good} bad={bad} neutral={neutral} positive={positive} average={average} all={all}/>  
        
        </div>
    )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

