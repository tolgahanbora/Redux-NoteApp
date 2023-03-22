import {useSelector} from 'react-redux'



function Contentlist() {


  const notes = useSelector((state) => state.note.items)
  const colors = useSelector((state) => state.note.color) 


  
  return (
    <div>
        <ul style={{marginLeft: "200px",display:"inline-block"}}>
          { notes.map((item,index) =>
            <li key={index} style={{backgroundColor: `${colors}`, width: "200px" ,height:"50px" , listStyleType: "none",padding:"10px",display:"inline-block"}}>{item}</li>

            )}
            </ul>
    </div>
  )
}

export default Contentlist