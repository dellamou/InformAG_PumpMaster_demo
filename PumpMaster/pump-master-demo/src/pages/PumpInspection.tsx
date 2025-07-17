import '../styles/PumpInspection.css';
import PumpInspectionChart from '../components/PumpInspectionChart';
import PumpLocationMap from '../components/PumpLocationMap';
import { PumpDetail, InspectionLog } from '../types/pump';

const mockPump: PumpDetail = {
  id: '12345',
  name: 'Pump 12345',
  type: 'Centrifugal',
  area: 'Area A',
  latitude: 41.7128,
  longitude: -74.006,
  flowRate: '1000 GPM',
  offset: '5 sec',
  currentPressure: 150,
  minPressure: 120,
  maxPressure: 180,
  status: 'Operational',
  lastUpdated: '2024-01-20 14:30'
};

const mockLogs: InspectionLog[] = [
  { timestamp: '00:00', pressure: 320 },
  { timestamp: '02:00', pressure: 335 },
  { timestamp: '04:00', pressure: 340 },
  { timestamp: '06:00', pressure: 325 },
  { timestamp: '08:00', pressure: 310 },
  { timestamp: '10:00', pressure: 315 },
  { timestamp: '12:00', pressure: 330 },
  { timestamp: '14:00', pressure: 345 },
  { timestamp: '16:00', pressure: 350 },
  { timestamp: '18:00', pressure: 340 },
  { timestamp: '20:00', pressure: 325 },
  { timestamp: '22:00', pressure: 330 },
  { timestamp: '23:59', pressure: 345 },
  { timestamp: '01:00', pressure: 328 },
];

const PumpInspection = () => {
  return (
    <div className="inspection-container">
      {/* Header Section */}
      <div className="inspection-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>{mockPump.name}</h1>
        <div className="inspection-meta" style={{ textAlign: 'left', minWidth: '250px' }}>
          <p style={{ margin: '2px 0', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <strong>Pump ID</strong>
            <span>{mockPump.id}</span>
          </p>
          <p style={{ margin: '2px 0', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <strong>Status</strong>
            <span>{mockPump.status}</span>
          </p>
          <p style={{ margin: '2px 0', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <strong>Last Updated</strong>
            <span>{mockPump.lastUpdated}</span>
          </p>
        </div>
      </div>

      {/* Attributes Section */}
      <div className="inspection-attributes" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '15px' }}>Attributes</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', margin: '5px 0' }}>
          <span style={{ fontWeight: '500' }}>Type</span>
          <span>{mockPump.type}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', margin: '5px 0' }}>
          <span style={{ fontWeight: '500' }}>Area/Block</span>
          <span>{mockPump.area}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', margin: '5px 0' }}>
          <span style={{ fontWeight: '500' }}>Location (lat/lon)</span>
          <span>{mockPump.latitude.toFixed(4)}°N, {mockPump.longitude.toFixed(4)}°W</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', margin: '5px 0' }}>
          <span style={{ fontWeight: '500' }}>Flow Rate</span>
          <span>{mockPump.flowRate}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', margin: '5px 0' }}>
          <span style={{ fontWeight: '500' }}>Offset</span>
          <span>{mockPump.offset}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', margin: '5px 0' }}>
          <span style={{ fontWeight: '500' }}>Pressure (Current | Min | Max)</span>
          <span>{mockPump.currentPressure} psi | {mockPump.minPressure} psi | {mockPump.maxPressure} psi</span>
        </div>
      </div>

      {/* Map Section */}
      <div className="inspection-map" style={{ marginBottom: '30px' }}>
        <h3>Map</h3>
        <PumpLocationMap coordinates={{ lat: mockPump.latitude, lng: mockPump.longitude }} />
      </div>

      {/* Chart Section */}
      <div className="inspection-chart">
        <div className="chart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ margin: 0 }}>Pressure Over Time</h3>
          <select style={{ 
            padding: '8px 12px', 
            borderRadius: '8px', 
            border: '1px solid #e1e5e9', 
            fontSize: '14px',
            backgroundColor: '#ffffff',
            color: '#374151',
            cursor: 'pointer',
            outline: 'none',
            transition: 'border-color 0.2s ease',
            fontFamily: 'inherit'
          }}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}>
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="area">Area Chart</option>
            <option value="scatter">Scatter Plot</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ marginBottom: '8px' }}>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 2px 0', fontWeight: '500' }}>Pressure (PSI)</p>
            <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 2px 0', color: '#1f2937' }}>{mockPump.currentPressure}</p>
          </div>
          <p style={{ fontSize: '12px', color: '#6b7280', margin: '0', fontWeight: '500' }}>Last 24 Hours <span className="positive">+5%</span></p>
        </div>
        <PumpInspectionChart logs={mockLogs} />
      </div>
    </div>
  );
};

export default PumpInspection;