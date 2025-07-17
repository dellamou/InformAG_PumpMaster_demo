import { Pump } from '../types/pump';

const mockPumps: Pump[] = [
  {
    id: '1',
    name: 'Pump 1',
    type: 'Centrifugal',
    area: 'Area A',
    latitude: -26.65,
    longitude: 153.10,
    flowRate: '1000 GPM',
    offset: '5 sec',
    currentPressure: 150,
    minPressure: 100,
    maxPressure: 200,
  },
  {
    id: '2',
    name: 'Pump 2',
    type: 'Rotary',
    area: 'Area B',
    latitude: -26.70,
    longitude: 153.12,
    flowRate: '800 GPM',
    offset: '3 sec',
    currentPressure: 135,
    minPressure: 90,
    maxPressure: 180,
  },
];
export default mockPumps;
