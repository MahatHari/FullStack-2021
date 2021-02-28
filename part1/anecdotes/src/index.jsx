import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })

  //creating points object to store vote for each anecdotes
  // anecdotes object is created dynamically with for loop on anecdotes.length
  /* for (let i = 0; i < anecdotes.length; i++){
    points[i] = 0
  } */
  
  const nextAnecdote = () => {
    let m = Math.floor(Math.random() * anecdotes.length)
    setSelected(m);
  }
  // With Array, would be easy with Array t
  /* const [test, setTest] = useState(Array(anecdotes.length).fill(0)) // creates test array  with 0 filled values of same length as anecdotes
  const vote = () => {
    const copyTest = [...test]
    copyTest[selected] += 1;
    setTest([...copyTest])
  } */

  const vote = () => {
    const copy = { ...points }
    copy[selected]+=1    
    setPoints({ ...copy })
    
    
  }
  // return index of anecdotes that has max votes (keys of Points with max value eg. 0:5, 1:4, returns 0 which has value of 5)
  const mostVotes = Object.keys(points).reduce((a, b) => (points[a] > points[b] ? a : b))
  const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>{text}</button>
    )
  }
  const Display = ({anecdotes, votes}) => {
    return (
      < div >
        <p>
          {anecdotes}
        </p>
        <p>
            has {votes} votes
          </p>
      </div >
    )
      
    
  }

  return(
    <div>
      <h2>Anecdote of the Day</h2>

     

      <Display anecdotes={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={vote} text="Vote" />
  
      <Button handleClick={nextAnecdote} text="Next Anecdote" />
      
      <h2>Anecdotes with most Votes</h2>
      
    {/* Conditional Rrendering to check if there has been any vote of not */}
      {(points[mostVotes] === 0)
        ? <p>Be first to vote</p>
        : <Display anecdotes={anecdotes[mostVotes]} votes={points[mostVotes]} />
      }
    </div>


  )
}

const anecdotes=[
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);

