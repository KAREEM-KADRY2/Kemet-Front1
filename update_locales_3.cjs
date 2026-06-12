const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, 'src', 'locales');
const langs = ['en', 'ar', 'fr', 'es', 'ru'];

const specsEn = {
  labels: {
    "payload_weight": "Payload Weight",
    "engine_power": "Engine Power",
    "bucket_capacity": "Bucket Capacity",
    "operating_weight": "Operating Weight",
    "engine_model": "Engine Model",
    "max_travel_speed": "Max Travel Speed",
    "dump_height": "Dump Height",
    "turning_radius": "Turning Radius",
    "hydraulic_flow": "Hydraulic Flow",
    "fuel_tank_capacity": "Fuel Tank Capacity",
    "ground_clearance": "Ground Clearance",
    "digging_depth": "Digging Depth",
    "moldboard_width": "Moldboard Width",
    "blade_pull": "Blade Pull",
    "payload_capacity": "Payload Capacity",
    "body_capacity": "Body Capacity",
    "blade_capacity": "Blade Capacity",
    "track_width": "Track Width",
    "backhoe_capacity": "Backhoe Capacity",
    "horsepower": "Horsepower",
    "transmission": "Transmission",
    "engine": "Engine",
    "maintenance": "Maintenance",
    "fuel_efficient": "Fuel Efficient",
    "built_for": "Built for"
  },
  values: {
    "advanced_system": "Advanced System",
    "high_performance": "High Performance",
    "easy_maintenance": "Easy Maintenance",
    "yes": "Yes",
    "agriculture": "Agriculture",
    "minimum_spot": "Minimum Spot",
    "n/a_(leveling)": "N/A (Leveling)"
  }
};

const specsAr = {
  labels: {
    "payload_weight": "وزن الحمولة",
    "engine_power": "قوة المحرك",
    "bucket_capacity": "سعة القادوس",
    "operating_weight": "وزن التشغيل",
    "engine_model": "موديل المحرك",
    "max_travel_speed": "أقصى سرعة سفر",
    "dump_height": "ارتفاع التفريغ",
    "turning_radius": "نصف قطر الدوران",
    "hydraulic_flow": "التدفق الهيدروليكي",
    "fuel_tank_capacity": "سعة خزان الوقود",
    "ground_clearance": "الخلوص الأرضي",
    "digging_depth": "عمق الحفر",
    "moldboard_width": "عرض النصل",
    "blade_pull": "قوة سحب الشفرة",
    "payload_capacity": "سعة الحمولة",
    "body_capacity": "سعة الصندوق",
    "blade_capacity": "سعة الشفرة",
    "track_width": "عرض الجنزير",
    "backhoe_capacity": "سعة الحفار الخلفي",
    "horsepower": "قوة الحصان",
    "transmission": "ناقل الحركة",
    "engine": "المحرك",
    "maintenance": "الصيانة",
    "fuel_efficient": "كفاءة الوقود",
    "built_for": "مصمم لـ"
  },
  values: {
    "advanced_system": "نظام متقدم",
    "high_performance": "أداء عالي",
    "easy_maintenance": "صيانة سهلة",
    "yes": "نعم",
    "agriculture": "الزراعة",
    "minimum_spot": "نقطة دنيا",
    "n/a_(leveling)": "غير متاح (للتسوية)"
  }
};

const specsFr = {
  labels: {
    "payload_weight": "Poids de la charge utile",
    "engine_power": "Puissance du moteur",
    "bucket_capacity": "Capacité du godet",
    "operating_weight": "Poids en ordre de marche",
    "engine_model": "Modèle de moteur",
    "max_travel_speed": "Vitesse de déplacement max",
    "dump_height": "Hauteur de vidage",
    "turning_radius": "Rayon de braquage",
    "hydraulic_flow": "Débit hydraulique",
    "fuel_tank_capacity": "Capacité du réservoir de carburant",
    "ground_clearance": "Garde au sol",
    "digging_depth": "Profondeur de creusement",
    "moldboard_width": "Largeur de la lame",
    "blade_pull": "Force de traction de la lame",
    "payload_capacity": "Capacité de charge utile",
    "body_capacity": "Capacité de la benne",
    "blade_capacity": "Capacité de la lame",
    "track_width": "Largeur de voie",
    "backhoe_capacity": "Capacité de la pelle rétro",
    "horsepower": "Puissance (CV)",
    "transmission": "Transmission",
    "engine": "Moteur",
    "maintenance": "Entretien",
    "fuel_efficient": "Économe en carburant",
    "built_for": "Conçu pour"
  },
  values: {
    "advanced_system": "Système avancé",
    "high_performance": "Haute performance",
    "easy_maintenance": "Entretien facile",
    "yes": "Oui",
    "agriculture": "Agriculture",
    "minimum_spot": "Point minimum",
    "n/a_(leveling)": "N/D (Nivellement)"
  }
};

const specsEs = {
  labels: {
    "payload_weight": "Peso de Carga Útil",
    "engine_power": "Potencia del Motor",
    "bucket_capacity": "Capacidad del Cucharón",
    "operating_weight": "Peso Operativo",
    "engine_model": "Modelo de Motor",
    "max_travel_speed": "Velocidad Máx. de Desplazamiento",
    "dump_height": "Altura de Descarga",
    "turning_radius": "Radio de Giro",
    "hydraulic_flow": "Flujo Hidráulico",
    "fuel_tank_capacity": "Capacidad del Tanque de Combustible",
    "ground_clearance": "Distancia al Suelo",
    "digging_depth": "Profundidad de Excavación",
    "moldboard_width": "Ancho de la Vertedera",
    "blade_pull": "Fuerza de Tracción de la Hoja",
    "payload_capacity": "Capacidad de Carga Útil",
    "body_capacity": "Capacidad de la Caja",
    "blade_capacity": "Capacidad de la Hoja",
    "track_width": "Ancho de Oruga",
    "backhoe_capacity": "Capacidad de la Retroexcavadora",
    "horsepower": "Caballos de Fuerza",
    "transmission": "Transmisión",
    "engine": "Motor",
    "maintenance": "Mantenimiento",
    "fuel_efficient": "Eficiente en Combustible",
    "built_for": "Construido para"
  },
  values: {
    "advanced_system": "Sistema Avanzado",
    "high_performance": "Alto Rendimiento",
    "easy_maintenance": "Fácil Mantenimiento",
    "yes": "Sí",
    "agriculture": "Agricultura",
    "minimum_spot": "Punto Mínimo",
    "n/a_(leveling)": "N/A (Nivelación)"
  }
};

const specsRu = {
  labels: {
    "payload_weight": "Вес полезной нагрузки",
    "engine_power": "Мощность двигателя",
    "bucket_capacity": "Емкость ковша",
    "operating_weight": "Эксплуатационная масса",
    "engine_model": "Модель двигателя",
    "max_travel_speed": "Макс. скорость движения",
    "dump_height": "Высота разгрузки",
    "turning_radius": "Радиус поворота",
    "hydraulic_flow": "Гидравлический поток",
    "fuel_tank_capacity": "Объем топливного бака",
    "ground_clearance": "Дорожный просвет",
    "digging_depth": "Глубина копания",
    "moldboard_width": "Ширина отвала",
    "blade_pull": "Тяговое усилие отвала",
    "payload_capacity": "Грузоподъемность",
    "body_capacity": "Вместимость кузова",
    "blade_capacity": "Вместимость отвала",
    "track_width": "Ширина гусеницы",
    "backhoe_capacity": "Вместимость обратной лопаты",
    "horsepower": "Лошадиные силы",
    "transmission": "Трансмиссия",
    "engine": "Двигатель",
    "maintenance": "Обслуживание",
    "fuel_efficient": "Экономичность топлива",
    "built_for": "Создано для"
  },
  values: {
    "advanced_system": "Передовая система",
    "high_performance": "Высокая производительность",
    "easy_maintenance": "Простое обслуживание",
    "yes": "Да",
    "agriculture": "Сельское хозяйство",
    "minimum_spot": "Минимальная точка",
    "n/a_(leveling)": "Н/Д (Выравнивание)"
  }
};

// Also inject the missing FR, ES, RU "about", "details", "fleet" texts.
const trFR = {
  about: {
    badge: "Notre Histoire",
    heading: "À propos de Kemet & Alfa Sino",
    subheading: "Établir des partenariats industriels de confiance à travers le Moyen-Orient, l'Afrique et au-delà depuis 2003.",
    history_badge: "Histoire de l'entreprise",
    history_heading_1: "Un Héritage Bâti Sur",
    history_heading_2: "La Confiance Industrielle",
    history_p1: "Fondée dans le quartier de Port Said à Dubaï, Alfa Sino General Trading Co. LLC a commencé comme importateur spécialisé d'équipements de construction et d'exploitation minière pour le marché des EAU en développement rapide.",
    history_p2: "La marque KEMET est née d'une conviction simple : les secteurs de la construction et de l'exploitation minière du CCG méritaient des machines spécialement conçues pour résister à des chaleurs extrêmes...",
    history_p3: "Aujourd'hui, les machines KEMET sont déployées à travers des mégaprojets de construction, des opérations minières à ciel ouvert et des développements d'infrastructures industrielles.",
    strengths_title: "Nos Forces Opérationnelles",
    strength_1_title: "Années d'Excellence",
    strength_1_desc: "Distribution de machinerie lourde axée sur les relations depuis 2003.",
    strength_2_title: "Disponibilité des Pièces",
    strength_2_desc: "Composants d'origine garantis pour un temps de fonctionnement maximal.",
    strength_3_title: "Envoi d'Ingénieurs",
    strength_3_desc: "Équipe de support technique dédiée active dans tout le CCG."
  },
  details: {
    back_to_catalog: "Retour au Catalogue",
    series: "Série",
    download_spec: "Télécharger la fiche technique",
    share_product: "Partager le produit",
    link_copied: "Lien copié ! 📋",
    tech_specs: "Spécifications Techniques",
    request_quote: "Demander un devis",
    get_pricing: "Obtenir les prix et la disponibilité",
    advisor_text: "Nos conseillers en équipement lourd répondent dans les 2 heures avec des devis personnalisés, des conditions d'expédition et des délais de livraison.",
    trust_1: "Garantie de réponse en 2 heures",
    trust_2: "Expédition mondiale disponible",
    trust_3: "Options de financement personnalisées",
    trust_4: "Garantie complète incluse",
    inquiry_sent: "Demande envoyée !",
    inquiry_sent_desc_1: "Votre demande pour le",
    inquiry_sent_desc_2: "a été reçue. Un conseiller vous contactera sous peu.",
    send_another: "Envoyer un autre",
    form_name: "Nom complet",
    form_name_placeholder: "Votre nom",
    form_email: "Email d'entreprise",
    form_phone: "Téléphone / WhatsApp",
    form_msg: "Message",
    form_msg_placeholder: "Je suis intéressé par le modèle %model% de KEMET...",
    submit_inquiry: "Soumettre la demande"
  },
  fleet: {
    "1": { name: "Chargeuse sur Pneus KL-950", description: "Chargeuse sur pneus robuste conçue pour la manutention de matériaux à haute capacité." },
    "2": { name: "Pelle Hydraulique KE-210", description: "Pelle hydraulique polyvalente conçue pour une efficacité de creusement maximale." },
    "3": { name: "Niveleuse KG-160", description: "Niveleuse de précision avec systèmes de contrôle de lame avancés." },
    "4": { name: "Camion Benne Minier KM-450", description: "Camion benne lourd à haute charge utile conçu pour transporter des matériaux sur des terrains accidentés." },
    "5": { name: "Bulldozer sur Chenilles KT-160", description: "Bulldozer industriel lourd conçu pour le déblaiement de sites agressifs." },
    "6": { name: "Tractopelle KB-880", description: "Chargeuse-pelleteuse utilitaire polyvalente combinant un chargement par godet frontal et une capacité d'excavation arrière." },
    "7": { name: "Pelle Minière KE-380", description: "Pelle sur chenilles robuste conçue pour des cycles d'excavation soutenus." },
    "8": { name: "Niveleuse Lourde KG-180", description: "Niveleuse à haute puissance conçue pour le nivellement de coupes profondes." },
    "9": { name: "Tracteur Agricole Série AR", description: "Tracteur agricole de 20-30 CV polyvalent et efficace." }
  }
};

const trES = {
  about: {
    badge: "Nuestra Historia",
    heading: "Acerca de Kemet y Alfa Sino",
    subheading: "Construyendo asociaciones industriales de confianza en todo el Medio Oriente, África y más allá desde 2003.",
    history_badge: "Historia de la Empresa",
    history_heading_1: "Un Legado Basado En",
    history_heading_2: "Confianza Industrial",
    history_p1: "Fundada en el distrito Port Said de Dubái, Alfa Sino General Trading Co. LLC comenzó como un importador especializado de equipos de construcción y minería...",
    history_p2: "La marca KEMET nació de una simple convicción: los sectores de construcción y minería del CCG merecían maquinaria diseñada específicamente para soportar calor extremo...",
    history_p3: "Hoy, las máquinas KEMET están desplegadas en megaproyectos de construcción y operaciones mineras a cielo abierto.",
    strengths_title: "Nuestras Fortalezas Operativas",
    strength_1_title: "Años de Excelencia",
    strength_1_desc: "Distribución de maquinaria pesada basada en relaciones desde 2003.",
    strength_2_title: "Disponibilidad de Piezas",
    strength_2_desc: "Componentes originales garantizados para maximizar el tiempo de actividad.",
    strength_3_title: "Despacho de Ingeniería",
    strength_3_desc: "Equipo de soporte técnico dedicado activo en todo el CCG."
  },
  details: {
    back_to_catalog: "Volver al Catálogo",
    series: "Serie",
    download_spec: "Descargar Hoja de Especificaciones",
    share_product: "Compartir Producto",
    link_copied: "¡Enlace copiado! 📋",
    tech_specs: "Especificaciones Técnicas",
    request_quote: "Solicitar una Cotización",
    get_pricing: "Obtener Precios y Disponibilidad",
    advisor_text: "Nuestros asesores responden dentro de las 2 horas con cotizaciones personalizadas.",
    trust_1: "Garantía de respuesta en 2 horas",
    trust_2: "Envío global disponible",
    trust_3: "Opciones de financiamiento",
    trust_4: "Garantía completa incluida",
    inquiry_sent: "¡Consulta Enviada!",
    inquiry_sent_desc_1: "Su solicitud para el",
    inquiry_sent_desc_2: "ha sido recibida.",
    send_another: "Enviar otra",
    form_name: "Nombre Completo",
    form_name_placeholder: "Su nombre",
    form_email: "Correo Corporativo",
    form_phone: "Teléfono / WhatsApp",
    form_msg: "Mensaje",
    form_msg_placeholder: "Estoy interesado en el modelo %model% de KEMET...",
    submit_inquiry: "Enviar Consulta"
  },
  fleet: {
    "1": { name: "Cargador Frontal KL-950", description: "Cargador frontal de servicio pesado para manejo de materiales de alta capacidad." },
    "2": { name: "Excavadora Hidráulica KE-210", description: "Excavadora hidráulica versátil para máxima eficiencia de excavación." },
    "3": { name: "Motoniveladora KG-160", description: "Motoniveladora de precisión con sistemas avanzados de control de cuchillas." },
    "4": { name: "Camión Volquete Minero KM-450", description: "Camión volquete de alta carga útil diseñado para transportar materiales." },
    "5": { name: "Bulldozer de Orugas KT-160", description: "Bulldozer industrial pesado para despeje de sitios agresivos." },
    "6": { name: "Retroexcavadora KB-880", description: "Retroexcavadora utilitaria multipropósito." },
    "7": { name: "Excavadora Minera KE-380", description: "Excavadora de orugas de servicio pesado para ciclos de excavación sostenidos." },
    "8": { name: "Motoniveladora Pesada KG-180", description: "Motoniveladora de alta potencia para nivelación de cortes profundos." },
    "9": { name: "Tractor Agrícola Serie AR", description: "Tractor agrícola versátil y eficiente de 20-30 HP." }
  }
};

const trRU = {
  about: {
    badge: "Наша История",
    heading: "О компании Kemet & Alfa Sino",
    subheading: "Построение надежных промышленных партнерств на Ближнем Востоке, в Африке и за их пределами с 2003 года.",
    history_badge: "История компании",
    history_heading_1: "Наследие, основанное на",
    history_heading_2: "Промышленном доверии",
    history_p1: "Основанная в Дубае, компания Alfa Sino начала свою деятельность как специализированный импортер строительного оборудования...",
    history_p2: "Бренд KEMET родился из простого убеждения: секторы строительства и горнодобывающей промышленности заслуживают надежного оборудования...",
    history_p3: "Сегодня машины KEMET используются в крупных строительных мегапроектах и добыче полезных ископаемых.",
    strengths_title: "Наши сильные стороны",
    strength_1_title: "Годы превосходства",
    strength_1_desc: "Поставка тяжелой техники с 2003 года.",
    strength_2_title: "Наличие оригинальных деталей",
    strength_2_desc: "Гарантированные оригинальные компоненты.",
    strength_3_title: "Инженерная поддержка",
    strength_3_desc: "Специализированная служба технической поддержки."
  },
  details: {
    back_to_catalog: "Вернуться в каталог",
    series: "Серия",
    download_spec: "Скачать спецификацию",
    share_product: "Поделиться продуктом",
    link_copied: "Ссылка скопирована! 📋",
    tech_specs: "Технические характеристики",
    request_quote: "Запросить цену",
    get_pricing: "Узнать цены и наличие",
    advisor_text: "Наши консультанты отвечают в течение 2 часов.",
    trust_1: "Гарантия ответа за 2 часа",
    trust_2: "Глобальная доставка",
    trust_3: "Варианты финансирования",
    trust_4: "Полная гарантия",
    inquiry_sent: "Запрос отправлен!",
    inquiry_sent_desc_1: "Ваш запрос на",
    inquiry_sent_desc_2: "был получен.",
    send_another: "Отправить еще",
    form_name: "Полное имя",
    form_name_placeholder: "Ваше имя",
    form_email: "Корпоративная почта",
    form_phone: "Телефон / WhatsApp",
    form_msg: "Сообщение",
    form_msg_placeholder: "Меня интересует KEMET %model%...",
    submit_inquiry: "Отправить запрос"
  },
  fleet: {
    "1": { name: "Колесный погрузчик KL-950", description: "Тяжелый колесный погрузчик для работы с материалами." },
    "2": { name: "Гидравлический экскаватор KE-210", description: "Универсальный гидравлический экскаватор." },
    "3": { name: "Автогрейдер KG-160", description: "Автогрейдер с передовыми системами управления." },
    "4": { name: "Карьерный самосвал KM-450", description: "Самосвал высокой грузоподъемности." },
    "5": { name: "Гусеничный бульдозер KT-160", description: "Тяжелый промышленный бульдозер." },
    "6": { name: "Экскаватор-погрузчик KB-880", description: "Многоцелевой экскаватор-погрузчик." },
    "7": { name: "Карьерный экскаватор KE-380", description: "Тяжелый гусеничный экскаватор." },
    "8": { name: "Тяжелый грейдер KG-180", description: "Мощный автогрейдер." },
    "9": { name: "Сельскохозяйственный трактор AR", description: "Универсальный сельскохозяйственный трактор." }
  }
};

langs.forEach(lang => {
  const filePath = path.join(localesPath, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Inject specs
    if (lang === 'en') data.specs = specsEn;
    if (lang === 'ar') data.specs = specsAr;
    if (lang === 'fr') {
      data.specs = specsFr;
      data.about = trFR.about;
      data.details = trFR.details;
      data.fleet = trFR.fleet;
    }
    if (lang === 'es') {
      data.specs = specsEs;
      data.about = trES.about;
      data.details = trES.details;
      data.fleet = trES.fleet;
    }
    if (lang === 'ru') {
      data.specs = specsRu;
      data.about = trRU.about;
      data.details = trRU.details;
      data.fleet = trRU.fleet;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}/translation.json`);
  }
});
