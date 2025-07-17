import { Link } from 'react-router-dom';
import mockPumps from '../data/mockPumps';
import '../styles/PumpOverview.css';
import { FaSearch, FaFilter, FaEdit, FaTrash } from 'react-icons/fa';

const PumpOverview = () => {
  return (
    <>
      <div className="overview-wrapper">
        <div className="overview-top-row">
            <h2 className="overview-title">Pumps</h2>
            <button className="btn btn-add">New Pump</button>
        </div>

        <div className="overview-second-row">
            <div className="overview-icons">
            {FaSearch({})}
            {FaFilter({})}
            {FaEdit({})}
            </div>
            <button className="btn btn-delete">
              {FaTrash({style: { marginRight: '12px' }})}
              Delete
            </button>
        </div>

        <table className="pump-table">
          <thead>
            <tr>
              <th>Pump Name</th>
              <th>Type</th>
              <th>Area/Block</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Flow Rate</th>
              <th>Offset</th>
              <th>Current Pressure</th>
              <th>Min Pressure</th>
              <th>Max Pressure</th>
            </tr>
          </thead>
          <tbody>
          {mockPumps.map((pump) => (
              <tr key={pump.id} className="pump-row">
              <td>
                  <Link to={`/inspection/${pump.id}`} className="pump-link">
                  {pump.name}
                  </Link>
              </td>
              <td>{pump.type}</td>
              <td>{pump.area}</td>
              <td>{pump.latitude}</td>
              <td>{pump.longitude}</td>
              <td>{pump.flowRate}</td>
              <td>{pump.offset}</td>
              <td>{pump.currentPressure} psi</td>
              <td>{pump.minPressure} psi</td>
              <td>{pump.maxPressure} psi</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PumpOverview;
