import React from 'react';
import { use } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

uuidv4(); 


const Card = () => {
  const [name, setName] = useState("Your Recipe")
  const [step, setStep] = useState("")
  const [steps, setSteps] = useState([])

  const handleEdit = (e, id) => {
    const updatedSteps = steps.map((item) => {
      if (item.id === id) {
        return { ...item, step: e.target.value }; // Create a new object with the updated step
      }
      return item; // Return the original item if no changes
    });
    setSteps(updatedSteps); // Update the state with the new array
    console.log(updatedSteps)
  };

  const handleDelete = (e, id)=>{
    console.log(`id is ${id}`);
    let newSteps = steps.filter(item=>{
      return item.id!==id
    });
    setSteps(newSteps)
    
  }
  const handleAdd = ()=>{
    setSteps([...steps, {id: uuidv4(), step}])
    setStep("")

  }
  const handleChange = (e)=>{
    setStep(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value); // Update the recipe name
    console.log(name)
  };

  return (
    <div className="container mx-auto my-5 rounded-xl p-5 bg-yellow-50">
        <div className="addStep">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="w-full rounded border editable-heading m-2"
        />
        {/* <h1 className='text-xl font-bold'>Your recipie</h1> */}
        <div className="addinput flex justify-between">            
        <input onChange={handleChange} value={step} type="text" className='w-[90%]'/> 
        
        <button onClick={handleAdd} className='bg-yellow-400 hov p-2 rounded-xl mx-2'>Add step</button>
        </div>
        </div>
        <h2 className='text-lg font-bold'>Steps</h2>
        <div className="steps">
            {steps.map(item=>{

            return <div key={item.id} className="step flex my-3 justify-between">
                <div className="text">
                <input type="text" onBlur={(e)=>{handleEdit(e, item.id)}} defaultValue={item.step}/>
                </div>
                <div className="buttons">
                    {/* <button onClick={handleDelete} className='bg-yellow-400 p-2 py-1 text-sm rounded-xl mx-2'>Edit</button> */}
                    <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-yellow-400 p-2 py-1 text-sm rounded-xl mx-2'>Delete</button>
                </div>
            </div>
            })}
        </div>
   </div> 
  )
}

export default Card
