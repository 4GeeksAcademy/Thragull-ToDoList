import { element } from 'prop-types';
import React, {useState} from 'react'

const List = () => {
    const [toDo, setToDo] = useState("")
    const [listOfThings, updateList] = useState([]);

  return (
    <div className='container justify-content-center mt-5 w-50'>
        <div className='input-group mb-5'>
            <span className='input-group-text '>What do you have to do.</span>
            <input className='form-control' id="toDo" placeholder='What needs to be done?' value={toDo}
                    onChange={(element) => {
                        setToDo(element.target.value)
                    }}
                    onKeyDown={(e) =>{
                      if ((e.key === "Enter") && (toDo !== "")) {
                        updateList([...listOfThings, <li key={listOfThings.length} className='list-group-item d-flex p-0 ps-2 bg-success'>
                                                  <div className='text my-auto py-2'>{toDo}</div>
                                                  <i className="fa fa-trash trash bg-danger px-3 py-3 ms-auto text-white"
                                                  onClick={(element) => console.log(element)}></i>
                                                  </li>])
                        setToDo("");
                        console.log(listOfThings);
                      }
                    }}/>
        </div>
        <ul className='list-group rounded-4'>
          {listOfThings}
        </ul>
    </div>
  )
}

export default List