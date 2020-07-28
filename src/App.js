import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

import { muscles, exercises } from './store'



function App() {

  const [category, setCategory] = useState('')

  const GetExercisesByMuscles = () => {
    return Object.entries(exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
      return exercises
    }, {}))
  }

  const exercise = (GetExercisesByMuscles())


  const handelCategorySelected = (category) => {
    setCategory(category, exercise)

  }




  return (

    < div className="App" >

      <Header />
      <Main

        exercise={exercise}
        category={category}
      />

      <Footer

        category={category}
        muscles={muscles}
        onSelect={handelCategorySelected} />

    </div >
  );
}

export default App;
