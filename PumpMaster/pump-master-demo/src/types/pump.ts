export interface Pump {
  id: string;
  name: string;
  type: string;
  area: string;
  latitude: number;
  longitude: number;
  flowRate: string;
  offset: string;
  currentPressure: number;
  minPressure: number;
  maxPressure: number;
}

export interface PumpSummary {
  id: string;
  name: string;
  type: string;
  area: string;
  latitude: number;
  longitude: number;
  flowRate: string;
  offset: string;
  currentPressure: number;
  minPressure: number;
  maxPressure: number;
}

export interface PumpDetail extends PumpSummary {
  status: string;
  lastUpdated: string;
}

export interface PumpCoordinates {
  lat: number;
  lng: number;
}

export interface InspectionLog {
  timestamp: string;
  pressure: number;
}