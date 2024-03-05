import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  // con un try catch fetcho i dati dall'url e li assegno a data
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // con useEffect al render del componente parte la fetch solo una volta 
  useEffect(() => {
    getData();
  }, []);

  // creo una funzione per aumentare selected
  const next = () => {
    setSelected((preValue) => {
      if (preValue + 1 === data.data.length) {
        return 0;
      }
      return preValue + 1;
    });
  }

  // creo una funzione per diminuire selected
  const previous = () => {
    setSelected((nextValue) => {
      if (nextValue === 0) {
        return (data.data.length - 1);
      } 
      return nextValue - 1;
    })
  }

  // condiziono il return in base alla promise se viene risolta o meno
  if (data.success) {
    return (
      <>
        {/* con il ternary operator reinderizzo il componente se sono presenti dati */}
        {data.data.length > 0 ? <SingleHoliday {...data.data[selected]} next={next} previous={previous}/> : <h4>No vacanze</h4>}
      </>
    )
  }
  return <h4>...loading</h4>
};

export default Holiday;
