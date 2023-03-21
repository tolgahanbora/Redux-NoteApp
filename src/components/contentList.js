

import {useSelector} from 'react-redux'


function Contentlist() {

  const notes = useSelector((state) => state.note.items)




  
  return (
    <div>
        <ul style={{marginLeft: "200px",display:"inline-block"}}>
            <li style={{backgroundColor: "#4FC3F7", width: "200px" ,height:"50px" , listStyleType: "none",padding:"10px",display:"inline-block"}}>{notes}</li>
            <li style={{backgroundColor: "#AED581", width: "200px" ,height:"50px" , listStyleType: "none",padding:"10px",display:"inline-block",marginLeft:"30px"}}>Note 2</li>
        </ul>
    </div>
  )
}

export default Contentlist