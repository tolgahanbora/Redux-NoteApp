import React from 'react'
import { TextField,Button ,Radio, RadioGroup,FormControlLabel} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addNote} from '../redux/noteSlice/noteSlice'
function Textarea() {

  const dispatch = useDispatch()
  const [note,setNote] = useState("")
  const [color, setColor] = useState('')

  const handleColorChange = (event) => {
    setColor(event.target.value)
 
  }
  
  const handleSumbit = async (e) => {
    e.preventDefault()
    await dispatch(addNote({note}))
    setNote("")
    console.log(note)
  }



  return (
    <div>
       <form onSubmit={handleSumbit} style={{ display: 'flex', justifyContent: 'center', margin: '50px' }} >
   <TextField value={note} onChange={(e) => setNote(e.target.value)} id="outlined-multiline-static"label="Note"  style={{width: "600px", height: "300px"} } multiline
          rows={6} placeholder="Enter your note here..."/>
        <div style={{  display: 'flex', justifyContent: 'center', margin: '177px', marginLeft: "650px",position:"absolute" }}>
        <Button type='sumbit' variant="contained" color="success" style={{width: "100px"}}>ADD</Button>
        </div>
        <div style={{position:"absolute",marginTop:"180px"}}>
        <RadioGroup value={color} onChange={handleColorChange} style={{display:"inline",marginRight:"100px"}}>
      <FormControlLabel
        value="red"
        control={<Radio color="primary" />}
        label="Red"
        style={{color:'red'}}
      />
      <FormControlLabel
        value="green"
        control={<Radio color="primary" />}
        label="Green"
        style={{color:'green'}}
      />
      <FormControlLabel
        value="blue"
        control={<Radio color="primary" />}
        label="Blue"
        style={{color:'blue'}}
      />
      <FormControlLabel
        value="yellow"
        control={<Radio color="primary" />}
        label="Yellow"
        style={{color:'brown'}}
      />
    </RadioGroup>
        </div>
        </form>
    </div>
  )
}

export default Textarea