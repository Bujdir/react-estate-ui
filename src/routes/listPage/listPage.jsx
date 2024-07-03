import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummydata";
import "./listPage.scss";

function ListPage() {
  const DATA = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {DATA.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={DATA} />
      </div>
    </div>
  );
}

export default ListPage;
