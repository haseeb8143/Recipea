import React from 'react'
import { useState } from 'react'

const Card = () => {
  const [step, setStep] = useState("")
  const [steps, setSteps] = useState([])

  const handleEdit = ()=>{

  }
  const handleDelete = ()=>{
    
  }
  const handleAdd = ()=>{
    setSteps([...steps, {step}])
    setStep("")
  }
  const handleChange = (e)=>{
    setStep(e.target.value)
  }
  return (
    <div className="container mx-auto my-5 rounded-xl p-5 bg-yellow-50">
        <div className="addStep">
        <input type="text" name="" id="" value="YOUR RECIPE" />
        <h1 className='text-xl font-bold'>Your recipie</h1>
        <div className="addinput flex justify-between">            
        <input onChange={handleChange} value={step} type="text" className='w-[90%]'/>
        <button onClick={handleAdd} className='bg-yellow-400 hov p-2 rounded-xl mx-2'>Add step</button>
        </div>
        </div>
        <h2 className='text-lg font-bold'>Steps</h2>
        <div className="steps">
            {steps.map(item=>{

            return <div className="step flex my-3 justify-between">
                <div className="text">
                <input type="text" value={item.step}/>
                </div>
                <div className="buttons">
                    <button onClick={handleDelete} className='bg-yellow-400 p-2 py-1 text-sm rounded-xl mx-2'>Edit</button>
                    <button onClick={handleDelete} className='bg-yellow-400 p-2 py-1 text-sm rounded-xl mx-2'>Delete</button>
                </div>
            </div>
            })}
        </div>
   </div> 
  )
}

export default Card
