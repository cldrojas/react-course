import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Civilizacion = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      <h1>{data.name}</h1>
      <h3>
        {data.army_type} - {data.expansion}
      </h3>
      <p>{data.civilization_bonus}</p>
    </div>
  );
};

export default Civilizacion;
