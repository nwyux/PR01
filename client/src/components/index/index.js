import axios from "axios";
import React from 'react'

export default function Index() {
    const [data, setData] = React.useState(null);

    function get() {
        axios.get('http://localhost:3001/').then(res => {
            console.log(res);
            setData(res.data);
        })
    }        

  return (
    <div>
        <button onClick={get}>Get</button>
        <p>{data}</p>
    </div>
  )
}
