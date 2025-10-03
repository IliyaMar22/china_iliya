export interface EVData {
  id: string;
  name: string;
  manufacturer: string;
  horsepower: number;
  battery_capacity: number;
  price: number;
  top_speed: number;
  acceleration: string;
  range: string;
  performance_score: number;
  value_score: number;
  image?: string;
  manufacturer_url: string;
  features: string[];
  category: 'budget' | 'moderate' | 'luxury';
  battery_category: 'low' | 'medium' | 'high';
  horsepower_category: 'low' | 'medium' | 'high' | 'extreme';
}

export const evData: EVData[] = [
  {
    id: 'zeekr-9x-hyper',
    name: 'Zeekr 9X Hyper',
    manufacturer: 'Zeekr',
    horsepower: 1381,
    battery_capacity: 70,
    price: 79660,
    top_speed: 200,
    acceleration: '3.2s (0-100km/h)',
    range: '500km',
    performance_score: 601.366,
    value_score: 7.549,
    manufacturer_url: 'https://www.zeekr.com/',
    features: ['Hyper Performance', 'Advanced AWD', 'Luxury Interior', 'Smart Cockpit'],
    category: 'luxury',
    battery_category: 'medium',
    horsepower_category: 'extreme'
  },
  {
    id: 'zeekr-9x',
    name: 'Zeekr 9X',
    manufacturer: 'Zeekr',
    horsepower: 1381,
    battery_capacity: 70,
    price: 67080,
    top_speed: 200,
    acceleration: '3.2s (0-100km/h)',
    range: '500km',
    performance_score: 600.108,
    value_score: 8.946,
    manufacturer_url: 'https://www.zeekr.com/',
    features: ['Extreme Performance', 'Advanced AWD', 'Luxury Interior', 'Smart Cockpit'],
    category: 'luxury',
    battery_category: 'medium',
    horsepower_category: 'extreme'
  },
  {
    id: 'nio-ec7',
    name: 'Nio EC7',
    manufacturer: 'NIO',
    horsepower: 644,
    battery_capacity: 100,
    price: 63160,
    top_speed: 200,
    acceleration: '3.8s (0-100km/h)',
    range: '620km',
    performance_score: 313.916,
    value_score: 4.970,
    manufacturer_url: 'https://www.nio.com/',
    features: ['Battery Swap Technology', 'Autonomous Driving', 'Premium Interior', 'NOMI AI'],
    category: 'moderate',
    battery_category: 'high',
    horsepower_category: 'high'
  },
  {
    id: 'nio-es7',
    name: 'Nio ES7',
    manufacturer: 'NIO',
    horsepower: 644,
    battery_capacity: 150,
    price: 69300,
    top_speed: 200,
    acceleration: '3.9s (0-100km/h)',
    range: '930km',
    performance_score: 329.530,
    value_score: 4.755,
    manufacturer_url: 'https://www.nio.com/',
    features: ['Battery Swap Technology', 'Autonomous Driving', 'Premium Interior', 'NOMI AI'],
    category: 'moderate',
    battery_category: 'high',
    horsepower_category: 'high'
  },
  {
    id: 'hiphi-x-6seater',
    name: 'HiPhi X 6-Seater',
    manufacturer: 'HiPhi',
    horsepower: 598,
    battery_capacity: 97,
    price: 80000,
    top_speed: 200,
    acceleration: '3.9s (0-100km/h)',
    range: '550km',
    performance_score: 296.3,
    value_score: 3.704,
    manufacturer_url: 'https://www.human-horizons.com/',
    features: ['Gull-wing Doors', 'Luxury 6-Seater', 'Advanced Tech', 'Premium Materials'],
    category: 'luxury',
    battery_category: 'high',
    horsepower_category: 'high'
  },
  {
    id: 'xpeng-g9-performance',
    name: 'XPeng G9 Performance',
    manufacturer: 'XPeng',
    horsepower: 551,
    battery_capacity: 98,
    price: 62000,
    top_speed: 200,
    acceleration: '3.9s (0-100km/h)',
    range: '570km',
    performance_score: 276.0,
    value_score: 4.452,
    manufacturer_url: 'https://www.xiaopeng.com/',
    features: ['Supercharging', 'XPILOT 4.0', 'Premium Audio', 'Smart Cockpit'],
    category: 'moderate',
    battery_category: 'high',
    horsepower_category: 'high'
  },
  {
    id: 'aito-m9',
    name: 'Aito M9',
    manufacturer: 'Aito',
    horsepower: 523,
    battery_capacity: 100,
    price: 65785,
    top_speed: 180,
    acceleration: '4.4s (0-100km/h)',
    range: '630km',
    performance_score: 263.779,
    value_score: 4.010,
    manufacturer_url: 'https://www.aitoauto.com/',
    features: ['Huawei HarmonyOS', 'Premium Interior', 'Advanced Safety', 'Smart Features'],
    category: 'moderate',
    battery_category: 'high',
    horsepower_category: 'high'
  },
  {
    id: 'byd-tang-ev-600d',
    name: 'BYD Tang EV 600D',
    manufacturer: 'BYD',
    horsepower: 517,
    battery_capacity: 108,
    price: 65000,
    top_speed: 180,
    acceleration: '4.4s (0-100km/h)',
    range: '600km',
    performance_score: 263.7,
    value_score: 4.057,
    manufacturer_url: 'https://www.byd.com/',
    features: ['Blade Battery', '7-Seater SUV', 'Advanced Safety', 'Smart Connectivity'],
    category: 'moderate',
    battery_category: 'high',
    horsepower_category: 'high'
  }
];

export const criteriaOptions = {
  price: [
    { value: 'budget', label: 'Budget Friendly', min: 0, max: 65000, color: 'green' },
    { value: 'moderate', label: 'Moderate Price', min: 65000, max: 75000, color: 'blue' },
    { value: 'luxury', label: 'Luxury Vehicle', min: 75000, max: Infinity, color: 'purple' }
  ],
  battery: [
    { value: 'low', label: 'Low (60-80 kWh)', min: 60, max: 80, color: 'red' },
    { value: 'medium', label: 'Medium (80-100 kWh)', min: 80, max: 100, color: 'yellow' },
    { value: 'high', label: 'High (100+ kWh)', min: 100, max: Infinity, color: 'green' }
  ],
  horsepower: [
    { value: 'low', label: 'Low (400-500 HP)', min: 400, max: 500, color: 'red' },
    { value: 'medium', label: 'Medium (500-600 HP)', min: 500, max: 600, color: 'yellow' },
    { value: 'high', label: 'High (600-800 HP)', min: 600, max: 800, color: 'blue' },
    { value: 'extreme', label: 'Extreme (800+ HP)', min: 800, max: Infinity, color: 'purple' }
  ]
};

export function filterEVs(criteria: {
  price?: string;
  battery?: string;
  horsepower?: string;
}): EVData[] {
  return evData.filter(ev => {
    const priceMatch = !criteria.price || ev.category === criteria.price;
    const batteryMatch = !criteria.battery || ev.battery_category === criteria.battery;
    const horsepowerMatch = !criteria.horsepower || ev.horsepower_category === criteria.horsepower;
    
    return priceMatch && batteryMatch && horsepowerMatch;
  });
}

export function getRecommendation(criteria: {
  price?: string;
  battery?: string;
  horsepower?: string;
}): EVData | null {
  const filtered = filterEVs(criteria);
  if (filtered.length === 0) return null;
  
  // Sort by performance score and return the best match
  return filtered.sort((a, b) => b.performance_score - a.performance_score)[0];
}
