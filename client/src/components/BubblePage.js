import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {axiosWithAuth} from '../axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const params = useParams();

  const fetchColors = () => {
    axiosWithAuth()
        .get('http://localhost:5000/api/colors')
        .then(res => {
          console.log(res.data)
          setColorList(res.data)
        })
        .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchColors(params.id)
  }, [params.id]);

  if (!colorList) {
    return <div>Loading color info...</div>
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
