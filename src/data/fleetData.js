export const fleetList = [
  {
    id: 1,
    category: 'LOADERS',
    name: 'KL-950 Wheel Loader',
    modelCode: 'KL-950',
    image: '/kl950-loader.jpg',
    year: '2026',
    description: 'Heavy-duty wheel loader engineered for high-capacity material handling and extreme industrial loading cycles.',
    specs: [
      { label: 'Payload Weight', value: '5,000 kg' },
      { label: 'Engine Power', value: '162 kW' },
      { label: 'Bucket Capacity', value: '3.2 m³' },
      { label: 'Operating Weight', value: '17,100 kg' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET WD10G220E21' },
      { label: 'Max Travel Speed', value: '38 km/h' },
      { label: 'Dump Height', value: '3,100 mm' },
      { label: 'Turning Radius', value: '5,900 mm' },
      { label: 'Hydraulic Flow', value: '220 L/min' },
      { label: 'Fuel Tank Capacity', value: '300 L' },
      { label: 'Ground Clearance', value: '450 mm' }
    ],
    gallery: [
      '/kl950-loader.jpg',
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'In Stock'
  },
  {
    id: 2,
    category: 'EXCAVATORS',
    name: 'KE-210 Hydraulic Excavator',
    modelCode: 'KE-210',
    image: '/ke210-excavator.jpg',
    year: '2025',
    description: 'Versatile hydraulic excavator designed for maximum digging efficiency, precision control, and low fuel consumption.',
    specs: [
      { label: 'Operating Weight', value: '21,200 kg' },
      { label: 'Engine Power', value: '112 kW' },
      { label: 'Digging Depth', value: '6.7 m' },
      { label: 'Bucket Capacity', value: '1.0 m³' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET 6BTAA5.9' },
      { label: 'Max Travel Speed', value: '5.5 km/h' },
      { label: 'Dump Height', value: '6,640 mm' },
      { label: 'Turning Radius', value: '3,540 mm' },
      { label: 'Hydraulic Flow', value: '2x220 L/min' },
      { label: 'Fuel Tank Capacity', value: '350 L' },
      { label: 'Ground Clearance', value: '468 mm' }
    ],
    gallery: [
      '/ke210-excavator.jpg',
      'https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'In Stock'
  },
  {
    id: 3,
    category: 'GRADERS',
    name: 'KG-160 Motor Grader',
    modelCode: 'KG-160',
    image: '/kg160-grader.jpg',
    year: '2024',
    description: 'Precision motor grader with advanced blade control systems, built for high-stakes road construction and site leveling.',
    specs: [
      { label: 'Operating Weight', value: '15,800 kg' },
      { label: 'Engine Power', value: '128 kW' },
      { label: 'Moldboard Width', value: '3.7 m' },
      { label: 'Blade Pull', value: '82 kN' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET 6CTA8.3' },
      { label: 'Max Travel Speed', value: '42 km/h' },
      { label: 'Dump Height', value: 'N/A (Leveling)' },
      { label: 'Turning Radius', value: '7,300 mm' },
      { label: 'Hydraulic Flow', value: '160 L/min' },
      { label: 'Fuel Tank Capacity', value: '280 L' },
      { label: 'Ground Clearance', value: '430 mm' }
    ],
    gallery: [
      '/kg160-grader.jpg',
      'https://images.unsplash.com/photo-1604177091002-ad9420658fa9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590846083693-f23fdede3a74?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'Available'
  },
  {
    id: 4,
    category: 'TRUCKS',
    name: 'KM-450 Mining Dump Truck',
    modelCode: 'KM-450',
    image: '/km450-truck.jpg',
    year: '2026',
    description: 'High-payload heavy dump truck engineered to transport materials across rugged terrain with ultimate structural durability.',
    specs: [
      { label: 'Payload Capacity', value: '45,000 kg' },
      { label: 'Engine Power', value: '395 kW' },
      { label: 'Body Capacity', value: '28 m³' },
      { label: 'Operating Weight', value: '32,000 kg' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET QSX15-C525' },
      { label: 'Max Travel Speed', value: '50 km/h' },
      { label: 'Dump Height', value: '7,800 mm' },
      { label: 'Turning Radius', value: '9,500 mm' },
      { label: 'Hydraulic Flow', value: '340 L/min' },
      { label: 'Fuel Tank Capacity', value: '500 L' },
      { label: 'Ground Clearance', value: '520 mm' }
    ],
    gallery: [
      '/km450-truck.jpg',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'In Stock'
  },
  {
    id: 5,
    category: 'TRACTORS',
    name: 'KT-160 Crawler Bulldozer',
    modelCode: 'KT-160',
    image: '/kt160-bulldozer.jpg',
    year: '2025',
    description: 'Heavy industrial crawler bulldozer engineered for aggressive site clearing, earth-pushing, and land reclamation.',
    specs: [
      { label: 'Operating Weight', value: '17,500 kg' },
      { label: 'Engine Power', value: '120 kW' },
      { label: 'Blade Capacity', value: '4.5 m³' },
      { label: 'Track Width', value: '510 mm' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET WD10G178E25' },
      { label: 'Max Travel Speed', value: '10.5 km/h' },
      { label: 'Dump Height', value: '1,095 mm (Lift)' },
      { label: 'Turning Radius', value: 'Minimum Spot' },
      { label: 'Hydraulic Flow', value: '180 L/min' },
      { label: 'Fuel Tank Capacity', value: '320 L' },
      { label: 'Ground Clearance', value: '400 mm' }
    ],
    gallery: [
      '/kt160-bulldozer.jpg',
      'https://images.unsplash.com/photo-1580901368919-7738efb8f87e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'In Stock'
  },
  {
    id: 6,
    category: 'LOADERS',
    name: 'KB-880 Backhoe Loader',
    modelCode: 'KB-880',
    image: '/kb880-backhoe.jpg',
    year: '2024',
    description: 'Multi-purpose backhoe utility loader combining front bucket loading and rear excavating capability in a compact footprint.',
    specs: [
      { label: 'Operating Weight', value: '8,200 kg' },
      { label: 'Engine Power', value: '74.5 kW' },
      { label: 'Bucket Capacity', value: '1.1 m³' },
      { label: 'Backhoe Capacity', value: '0.25 m³' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET 4BT3.9' },
      { label: 'Max Travel Speed', value: '40 km/h' },
      { label: 'Dump Height', value: '2,740 mm' },
      { label: 'Turning Radius', value: '4,200 mm' },
      { label: 'Hydraulic Flow', value: '140 L/min' },
      { label: 'Fuel Tank Capacity', value: '150 L' },
      { label: 'Ground Clearance', value: '370 mm' }
    ],
    gallery: [
      '/kb880-backhoe.jpg',
      'https://images.unsplash.com/photo-1580901368919-7738efb8f87e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'Available'
  },
  {
    id: 7,
    category: 'EXCAVATORS',
    name: 'KE-380 Mining Excavator',
    modelCode: 'KE-380',
    image: '/ke380-excavator.jpg',
    year: '2026',
    description: 'Heavy-duty crawler excavator engineered for sustained excavation cycles in open-pit mines and heavy quarry sites.',
    specs: [
      { label: 'Operating Weight', value: '38,500 kg' },
      { label: 'Engine Power', value: '198 kW' },
      { label: 'Bucket Capacity', value: '1.8 m³' },
      { label: 'Digging Depth', value: '7.38 m' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET 6LTAA8.9' },
      { label: 'Max Travel Speed', value: '5.2 km/h' },
      { label: 'Dump Height', value: '7,150 mm' },
      { label: 'Turning Radius', value: '4,300 mm' },
      { label: 'Hydraulic Flow', value: '2x320 L/min' },
      { label: 'Fuel Tank Capacity', value: '620 L' },
      { label: 'Ground Clearance', value: '500 mm' }
    ],
    gallery: [
      '/ke380-excavator.jpg',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'In Stock'
  },
  {
    id: 8,
    category: 'GRADERS',
    name: 'KG-180 Heavy Grader',
    modelCode: 'KG-180',
    image: '/kg180-grader.jpg',
    year: '2025',
    description: 'High-horsepower motor grader designed for deep cut leveling and high-volume gravel grading on heavy infrastructure projects.',
    specs: [
      { label: 'Operating Weight', value: '18,500 kg' },
      { label: 'Engine Power', value: '147 kW' },
      { label: 'Moldboard Width', value: '4.3 m' },
      { label: 'Blade Pull', value: '98 kN' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET 6LTAA8.9' },
      { label: 'Max Travel Speed', value: '45 km/h' },
      { label: 'Dump Height', value: 'N/A (Leveling)' },
      { label: 'Turning Radius', value: '7,900 mm' },
      { label: 'Hydraulic Flow', value: '190 L/min' },
      { label: 'Fuel Tank Capacity', value: '350 L' },
      { label: 'Ground Clearance', value: '450 mm' }
    ],
    gallery: [
      '/kg180-grader.jpg',
      'https://images.unsplash.com/photo-1604177091002-ad9420658fa9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590846083693-f23fdede3a74?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'Available'
  },
  {
    id: 9,
    category: 'TRACTORS',
    name: 'AR Series Agricultural Tractor',
    modelCode: 'AR-30',
    image: '/ar-tractor-1.jpg',
    year: '2026',
    description: 'Versatile and efficient 20-30 HP agricultural tractor designed for modern farming needs. Built to work, built to last.',
    specs: [
      { label: 'Horsepower', value: '20-30 HP' },
      { label: 'Transmission', value: 'Advanced System' },
      { label: 'Engine', value: 'High Performance' },
      { label: 'Maintenance', value: 'Easy Maintenance' }
    ],
    extraSpecs: [
      { label: 'Engine Model', value: 'KEMET EcoPower' },
      { label: 'Max Travel Speed', value: '30 km/h' },
      { label: 'Fuel Efficient', value: 'Yes' },
      { label: 'Built for', value: 'Agriculture' },
      { label: 'Hydraulic Flow', value: 'Standard' },
      { label: 'Fuel Tank Capacity', value: '45 L' },
      { label: 'Ground Clearance', value: '350 mm' }
    ],
    gallery: [
      '/ar-tractor-1.jpg',
      '/ar-tractor-2.jpg',
      '/ar-tractor-3.jpg'
    ],
    status: 'In Stock'
  }
];
