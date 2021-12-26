import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AgeOfEmpires = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const url =
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.civilizations);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Link to={`/civilizaciones/${item.id}`}>
            {item.name} - {item.expansion}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AgeOfEmpires;
