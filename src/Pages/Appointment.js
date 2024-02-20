import React,{useState,useCallback} from 'react'
import { Calendar } from '@natscale/react-calendar'
import "./Appointment.css"
export default function Appointment() {
    const [value,setValue] = useState();

    const onchange = useCallback(
        (value)=>{
            setValue(value);
        },
        [setValue]
    );
    return (
        <>
           <div className='box'>
            <h1>CALENDER</h1>
            <Calendar value={value} onChange={onchange} />
           </div>
           <div className="selected-date">
        <span className="date">Tuesday, February 20</span>
        <div className="time-slots">
          <button>3:30 PM</button>
          <button>4:30 PM</button>
          <button>5:30 PM</button>
          <button>8:30 PM</button>
          <button>9:30 PM</button>
          <button>10:30 PM</button>
        </div>
      </div>
        </>
    )
}
