import React from 'react';



const Header = ({name}) => {

  return(<h1>
    {name}
  </h1>)
}

const Content = ({parts}) => {
 return( <div>
     {parts.map((part) =>  <Part key={part.id} topic={part.name} exercises={ part.exercises}/>)}
  </div>)
}

const Part = ({topic, exercises}) => {
 
  return (
    <p>
       {topic} {exercises}
  </p>
   
  )
}
const Total = ({ parts }) => {
    
  return(<p>
    Total number of exercises {parts.reduce((acc, init)=> acc +init.exercises,0)}
  </p>)
}
const Course = ({course}) => {

    return (
        <div>
            <Header name={course.name }/>
            <Content parts={course.parts}/>
           <Total parts={course.parts} />
        </div>
    )
}
export default Course;