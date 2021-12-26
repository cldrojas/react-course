const Personaje = ({ data }) => {
  return (
    <div className="col-md-4 mb-4 mt-3">
      <div className="card p-3">
        <div className="card-title d-flex justify-content-between align-items-center">
          <h3>{data.name}</h3>
          <span>Origin: {data.origin.name}</span>
        </div>
        <img src={data.image} className="rounded" alt={data.name} />
        <div className="card-body">
          <h6>Species: {data.species}</h6>
          <h6>Gender: {data.gender}</h6>
          <h6>Last location: {data.location.name}</h6>
          <h6>Status: {data.status}</h6>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
