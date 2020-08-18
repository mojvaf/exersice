import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

import { muscles, exercises } from './store'



function App() {

  const [category, setCategory] = useState('')
  const [exerciseSelect, setExerciseSelect] = useState(exercises)

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

  const onExerciseCreate = () => {
    setCategory(({ category }) => ({ ...category, category }))

  }


  const handelExercisesSelected = (id) => {
    setExerciseSelect(exercises.find(ex => ex.id === id))
  }


  const handelExercisesDelete = (id) => {
    setExerciseSelect(exercises.filter(ex => ex.id !== id))
  }

  return (

    < div className="App" >

      <Header
        muscles={muscles}
        onExerciseCreate={onExerciseCreate}
      />
      <Main
        exerciseSelect={exerciseSelect}
        exercise={exercise}
        category={category}
        onSelect={handelExercisesSelected}
        onDelete={handelExercisesDelete}
      />

      <Footer

        category={category}
        muscles={muscles}
        onSelect={handelCategorySelected} />

    </div >
  );
}

export default App;
