import './CityList.css';

function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;
  return (
    <div>
      <h1 className="CityList">CityList</h1>

      <ul className="CityList_com">
        {cities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default CityList;