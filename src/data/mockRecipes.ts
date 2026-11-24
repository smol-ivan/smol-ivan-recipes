import type { Recipe } from '../types/recipe';

// TODO: Reemplazar estos datos mock con la carga real de Content Collections (getCollection('recipes'))
// cuando se defina la colección en src/content/config.ts.

export const mockRecipes: Recipe[] = [
  {
    title: 'Salmón glaseado con soya, jengibre y sésamo tostado',
    slug: 'salmon-glaseado-soya-jengibre',
    category: 'Pescado',
    role: 'protein',
    description:
      'Técnica de sellado en sartén de hierro colado con reducción agridulce de shoyu envejecido, mirin y raíz fresca de jengibre rallada finamente al microplane. Acabado con emulsión lacada de textura translúcida y semillas tostadas a 160°C.',
    tags: ['Pescado', 'CenaRápida', 'Proteico'],
    servings: 2,
    time: {
      prep_min: 10,
      cook_min: 15,
    },
    nutrition: {
      kcal: 480,
      protein_g: 42,
      carbs_g: 18,
      fat_g: 26,
    },
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo4SN0aRb-Gu1gzSkGxqJFzi_tXN-nxoibw3CrkTaHxOaxWYl29WK0RPNcx1zxHMvRzo07LSJC7Cv8PDBJO-Mcn_AthbMpfgFIEi8lSUaydfPnBsYlKdJPOLtYrmTqtYPgAKbbDqi-d_gD1uNWiaTb2As9aXU1m91W1pte9JSqzUVyXNm7Fv0ae9fGkOHsAhWtfgpnVH_EwG5sINChm6vPhuzX0aB29QviDAMgChwiZNADDBq45knK',
      caption: 'FIG 01. SALMÓN DEL ATLÁNTICO SELLADO CON REDUCCIÓN DE SHOYU Y MIRIN A FUEGO DIRECTO',
      target_internal_temp_c: 52,
    },
    ingredient_groups: [
      {
        group: 'Base & Proteína',
        items: [
          { name: 'Filetes de salmón fresco con piel', amount: 2, unit: 'unidades (400g)' },
          { name: 'Aceite vegetal neutro (cacahuate o canola)', amount: 15, unit: 'ml' },
          { name: 'Sal marina en escamas finas', amount: 3, unit: 'g' },
        ],
      },
      {
        group: 'Glaseado & Marinada',
        items: [
          { name: 'Salsa de soya oscura fermentada (Shoyu)', amount: 45, unit: 'ml' },
          { name: 'Mirin auténtico japonés', amount: 30, unit: 'ml' },
          { name: 'Jengibre fresco rallado fino', amount: 15, unit: 'g' },
          { name: 'Ajo morado prensado o microplane', amount: 1, unit: 'diente' },
          { name: 'Miel pura de abeja o azúcar moscabado', amount: 20, unit: 'g' },
        ],
      },
      {
        group: 'Toppings & Emplatado',
        items: [
          { name: 'Semillas de sésamo mixto tostadas', amount: 10, unit: 'g' },
          { name: 'Cebollín / Scallion en corte sesgado', amount: 2, unit: 'tallos' },
          { name: 'Aceite puro de sésamo tostado', amount: 5, unit: 'ml' },
        ],
      },
    ],
    steps: [
      {
        order: 1,
        stage_label: 'SECADO',
        condition_label: 'Temperatura ambiente · 10 min',
        instruction:
          'Retire los filetes de salmón del refrigerador 15 minutos antes de cocinar para atemperar las fibras musculares. Con papel absorbente de grado culinario, presione con firmeza la piel repetidas veces hasta remover toda la humedad superficial residual. Esta ausencia de líquido es el único factor determinante para conseguir una reacción de Maillard perfecta y una piel verdaderamente crujiente. Espolvoree una pizca ligera de sal marina sobre ambos lados.',
      },
      {
        order: 2,
        stage_label: 'MEZCLA',
        condition_label: 'Tazón frío · 2 min',
        instruction:
          'En un cuenco pequeño de vidrio o cerámica, combine los 45 ml de salsa de soya, 30 ml de mirin, la miel pura de abeja, el jengibre rallado fino (aprovechando sus jugos naturales) y el diente de ajo prensado. Bata enérgicamente con un tenedor o batidor de varillas pequeño hasta que la miel se disuelva por completo y la mezcla adquiera una consistencia homogénea y aromática. Reserve a un lado de la hornilla.',
      },
      {
        order: 3,
        stage_label: 'SELLADO',
        condition_label: 'Fuego medio-alto · 4–5 min',
        instruction:
          'Caliente una sartén de fondo grueso (preferentemente hierro o acero inoxidable) a fuego medio-alto. Agregue los 15 ml de aceite vegetal hasta que relumbre pero sin humear excesivamente. Coloque los filetes con la piel hacia abajo, ejerciendo una presión suave y uniforme con una espátula de pescado durante los primeros 30 segundos para evitar que el pescado se encorve. Cocine sin mover hasta que la piel esté dorada, rígida y crujiente, y el color opaco suba tres cuartas partes del lomo.',
      },
      {
        order: 4,
        stage_label: 'GLASEADO',
        condition_label: 'Fuego medio-bajo · 2–3 min',
        instruction:
          'Voltee cuidadosamente el salmón sobre el lomo de carne. Reduzca el fuego a nivel medio-bajo inmediatamente. Vierta la mezcla de glaseado de soya y jengibre alrededor de los filetes (no directamente sobre la piel crujiente). La salsa hervirá rápidamente en burbujas densas y brillantes; con una cuchara de mango largo, bañe continuamente la carne con la salsa reducida durante 90 segundos hasta que nape la superficie con un barniz caoba denso y translúcido.',
      },
      {
        order: 5,
        stage_label: 'REPOSO',
        condition_label: 'Inmediato',
        instruction:
          'Traslade los filetes a platos tibios con la piel hacia arriba o lomo inclinado. Rocíe las últimas gotas del glaseado espeso sobre la carne, añada un hilo tenue de aceite puro de sésamo tostado y culmine con la lluvia de semillas de sésamo tostado y el scallion verde cortado al sesgo. Deje reposar 60 segundos antes del primer corte para que los jugos terminen de redistribuirse.',
      },
    ],
    tips: ['sarten-hierro-temperatura', 'sustitucion-mirin'],
    extras: [
      {
        type: 'technique',
        related_to: 'Piel de pescado',
        content:
          'Si la sartén no alcanza los 190°C antes de depositar el pescado, la piel absorberá la grasa en lugar de freírse por deshidratación instantánea. Nunca intente despegar el filete durante los primeros dos minutos: el pescado se "autolibera" de la superficie metálica exactamente en el momento en que las proteínas de la piel se caramelizan y sellan.',
        added_at: '2025-01-10T12:00:00Z',
      },
      {
        type: 'substitution',
        related_to: 'Mirin',
        content:
          'En caso de no disponer de Mirin tradicional, puede sustituirse por 25 ml de sake de cocina + 5 g de jarabe de agave o miel de maple grado A. Evite sustituir por vinagre de arroz sin añadir un edulcorante, ya que la acidez excesiva cuajaría prematuramente las albúminas superficiales del salmón.',
        added_at: '2025-01-10T12:00:00Z',
      },
    ],
  },
  {
    title: 'Sopa de miso con tofu sedoso',
    slug: 'sopa-de-miso-tofu-sedoso',
    category: 'Sopas',
    role: 'complete',
    description:
      'Caldo dashi tradicional infusionado a fuego lento con pasta de miso rojo y blanco, cubos suaves de tofu sedoso, alga wakame hidratada y cebollín fresco.',
    tags: ['Sopas', 'Japonesa', 'Reconfortante'],
    servings: 2,
    time: {
      prep_min: 5,
      cook_min: 15,
    },
    nutrition: {
      kcal: 140,
      protein_g: 12,
      carbs_g: 10,
      fat_g: 5,
    },
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsx0TuoJa3uN4A_znKIKAf-DMix9H_gLbYw9amC2FZgV1PGib-H9uBBWJj1y-Hyo5isIM_R6qqM-cBaeqBB_d2Io_HxoyPnF85dOv8YvUJ3jFwg9YDhEhiVZkteSl1kEmdV4_CVUGprCHpHLEpjfoAejGZ9sHz1QiDnBwJhIqKdcQ-b5ntffwYy7iAvJIWNpPEK_zzuW8zyN3nDclMbJ8pBh3DjmebrP39yGA2jOTmzNmtmrSqw9l1',
      caption: 'FIG 02. CALDO DASHI CON TOFU SEDOSO Y ALGA WAKAME',
      target_internal_temp_c: 85,
    },
    ingredient_groups: [
      {
        group: 'Caldo & Base',
        items: [
          { name: 'Caldo Dashi (kombu y katsuobushi)', amount: 600, unit: 'ml' },
          { name: 'Pasta miso rojo (Awase o Akamiso)', amount: 40, unit: 'g' },
          { name: 'Alga wakame seca', amount: 5, unit: 'g' },
        ],
      },
      {
        group: 'Guarnición & Toppings',
        items: [
          { name: 'Tofu sedoso cortado en cubos de 1.5 cm', amount: 200, unit: 'g' },
          { name: 'Cebollín fino rebanado', amount: 2, unit: 'tallos' },
        ],
      },
    ],
    steps: [
      {
        order: 1,
        stage_label: 'INFUSIÓN',
        condition_label: 'Fuego medio · 5 min',
        instruction:
          'Lleve el caldo dashi a ebullición suave en una cacerola pequeña. Añada el alga wakame y retire del fuego directo para no sobrecalentar el dashi.',
      },
      {
        order: 2,
        stage_label: 'DISOLUCIÓN',
        condition_label: 'Sin hervir · 3 min',
        instruction:
          'Coloque la pasta miso en un colador pequeño sumergido parcialmente en el caldo. Con una cuchara, disuelva suavemente el miso para evitar grumos.',
      },
      {
        order: 3,
        stage_label: 'FINALIZACIÓN',
        condition_label: 'Fuego mínimo · 2 min',
        instruction:
          'Agregue con cuidado los dados de tofu sedoso para que no se desmoronen. Caliente un minuto sin que vuelva a hervir a borbotones y sirva con cebollín.',
      },
    ],
  },
  {
    title: 'Caldo claro de shiitake y cebollín',
    slug: 'caldo-claro-shiitake-cebollin',
    category: 'Sopas',
    role: 'base',
    description:
      'Consomé cristalino de hongos shiitake deshidratados a baja temperatura con ribbons de puerro tierno, jengibre laminado y semillas de sésamo blanco.',
    tags: ['Sopas', 'Vegano', 'Umami'],
    servings: 4,
    time: {
      prep_min: 10,
      cook_min: 25,
    },
    nutrition: {
      kcal: 95,
      protein_g: 6,
      carbs_g: 14,
      fat_g: 2,
    },
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQULye5Cdb2P0cSNZysmyX3dg-RRSo3-QX8zBqJHXXFylj6x_Q9DPgUBrJ8xStWjkpy5kByVf2b8C1eS7ExC0ing35qr-MVRWtsCplEQLrbvn6Kxu_hnaj-yH5BRoj6uS_-iG_m6HEt-Qvw3MtI-MlykylVfD5ZIWx2xggu98aso4E_U1Plts2cA1uqqig-zHnFsMzRrLRill1JONUMMAFC6dA5CKFXTmyhch3eVVtXyfHcpZu5z5C',
      caption: 'FIG 03. CONSOMÉ CRISTALINO DE HONGOS SHIITAKE',
    },
    ingredient_groups: [
      {
        group: 'Extracción de Hongos',
        items: [
          { name: 'Hongos shiitake deshidratados', amount: 8, unit: 'unidades' },
          { name: 'Agua filtrada fría', amount: 1000, unit: 'ml' },
          { name: 'Tira de alga kombu', amount: 10, unit: 'g' },
        ],
      },
      {
        group: 'Sazón & Acabado',
        items: [
          { name: 'Salsa shoyu clara', amount: 20, unit: 'ml' },
          { name: 'Aceite de ajonjolí', amount: 5, unit: 'ml' },
          { name: 'Cebollín en juliana fina', amount: 3, unit: 'tallos' },
        ],
      },
    ],
    steps: [
      {
        order: 1,
        stage_label: 'HIDRATACIÓN',
        condition_label: 'Fuego bajo · 15 min',
        instruction:
          'Hidrate los hongos shiitake y el kombu en agua filtrada a fuego muy lento sin sobrepasar 80°C para extraer la máxima concentración de ácido glutámico.',
      },
      {
        order: 2,
        stage_label: 'FILTRADO',
        condition_label: 'Tamiz fino · 5 min',
        instruction:
          'Filtre el caldo a través de una muselina fina. Corte los shiitake en tiras delgadas e incorpórelos nuevamente al caldo con el toque de shoyu claro.',
      },
    ],
  },
  {
    title: 'Pasta cacio e pepe artesanal',
    slug: 'pasta-cacio-e-pepe-artesanal',
    category: 'Pasta',
    role: 'complete',
    description:
      'Emulsión clásica romana de queso Pecorino Romano añejado DOP con pimienta negra tostada Tellicherry majada al mortero y agua almidonada de cocción.',
    tags: ['Pasta', 'ClásicoItaliano', 'MínimoIngrediente'],
    servings: 2,
    time: {
      prep_min: 5,
      cook_min: 10,
    },
    nutrition: {
      kcal: 520,
      protein_g: 22,
      carbs_g: 68,
      fat_g: 18,
    },
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcAWJvDgYUxoj_rczMnd4Iv8d5_OVe9mAsL-jw79qKW46ljH76rrCw74u_USMpSLQk4vUBCdEG0t5_zWIRT6wBUPSxNFxGaKQuK7MQwoizMgJhYK1HQoTwajX1817bVnn9LnhPFogvERNXVHsYVVnpZClFGUz-15Kh8envpSFOYWAfchUaJx-K82McSzw3JWkAEV3iRUIoYPenAMLHDTHFobL8labOt3t-N4un1GHxpyF2QTNt0P3P',
      caption: 'FIG 04. SPAGHETTONI TRAFILATI AL BRONZO CON PECORINO ROMANO',
    },
    ingredient_groups: [
      {
        group: 'Pasta & Cocción',
        items: [
          { name: 'Spaghettoni de trigo duro', amount: 200, unit: 'g' },
          { name: 'Agua para hervir (con sal moderada)', amount: 2000, unit: 'ml' },
        ],
      },
      {
        group: 'Emulsión de Queso y Pimienta',
        items: [
          { name: 'Queso Pecorino Romano DOP rallado fino', amount: 120, unit: 'g' },
          { name: 'Granos de pimienta negra Tellicherry', amount: 6, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        order: 1,
        stage_label: 'TOSTADO',
        condition_label: 'Sartén seca · 3 min',
        instruction:
          'Tueste los granos de pimienta negra recién machacados en una sartén amplia a fuego medio hasta liberar sus notas balsámicas y picantes.',
      },
      {
        order: 2,
        stage_label: 'CREMA',
        condition_label: 'Fuera del fuego',
        instruction:
          'En un cuenco, mezcle el Pecorino con cucharadas de agua de pasta almidonada templada hasta formar una pasta cremosa sin grumos.',
      },
      {
        order: 3,
        stage_label: 'MANTECATURA',
        condition_label: 'Sartén templada · 2 min',
        instruction:
          'Vierta la pasta al dente en la sartén de pimienta y ligue vigorosamente con la crema de pecorino manteniendo la temperatura por debajo de 65°C.',
      },
    ],
  },
  {
    title: 'Pollo asado al limón y romero',
    slug: 'pollo-asado-limon-romero',
    category: 'Pollo',
    role: 'complete',
    description:
      'Piezas de pollo de campo doradas al horno con gajos confitados de limón Meyer, dientes enteros de ajo asado y ramitas frescas de romero silvestre.',
    tags: ['Pollo', 'Horno', 'Aromático'],
    servings: 4,
    time: {
      prep_min: 15,
      cook_min: 35,
    },
    nutrition: {
      kcal: 460,
      protein_g: 48,
      carbs_g: 8,
      fat_g: 26,
    },
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8Ml_LzbfsT6oT4f-Qe0sgVoByVK1xAaGFq3J4f0W7WwTedMtWK4mF8aNLZH1LQcKb7wkwG9wxR8-DhjgAWnDLEXOAISJg78Ml8_DiPa2ppva8aSLMzzxM3zN-9h5SmWBjYQxBVBDqHZvL8svDCpz1Ut3a3-_ZjvYpLesOujyJFRRAziBJSTVoKke6V8vtXfBoLBxNuAmSXy22IzpBX6sl8o6ehNTSZZdA9y6CcS6JCIOHlwEeEU1u',
      caption: 'FIG 05. PECHUGA Y MUSLOS ASADOS EN CERÁMICA REFRACTARIA',
      target_internal_temp_c: 74,
    },
    ingredient_groups: [
      {
        group: 'Proteína Principal',
        items: [
          { name: 'Cuartos traseros y pechuga de pollo de pastoreo', amount: 800, unit: 'g' },
          { name: 'Aceite de oliva virgen extra', amount: 30, unit: 'ml' },
        ],
      },
      {
        group: 'Marinada Cítrica & Aromas',
        items: [
          { name: 'Limones Meyer cortados en cuartos', amount: 2, unit: 'unidades' },
          { name: 'Ramas de romero fresco', amount: 4, unit: 'piezas' },
          { name: 'Cabeza de ajo partida a la mitad', amount: 1, unit: 'cabeza' },
          { name: 'Sal kosher y pimienta negra', amount: 8, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        order: 1,
        stage_label: 'MARINADO',
        condition_label: 'Ambiente · 15 min',
        instruction:
          'Frote las piezas de pollo con el aceite de oliva, jugo de un limón, sal y pimienta. Disponga en bandeja cerámica con los ajos y el romero.',
      },
      {
        order: 2,
        stage_label: 'HORNEADO',
        condition_label: 'Horno 200°C · 35 min',
        instruction:
          'Hornee hasta que la piel quede crujiente y dorada, y la temperatura interna del muslo alcance los 74°C sin perder jugosidad.',
      },
    ],
  },
  {
    title: 'Té frío de hibisco y cardamomo',
    slug: 'te-frio-hibisco-cardamomo',
    category: 'Bebidas',
    role: 'complete',
    description:
      'Infusión fría astringente y floral de cálices de flor de jamaica (hibisco) con vainas de cardamomo verde machacadas y rodajas deshidratadas de naranja roja.',
    tags: ['Bebidas', 'SinAzúcar', 'Refrescante'],
    servings: 3,
    time: {
      prep_min: 5,
      cook_min: 5,
    },
    nutrition: {
      kcal: 25,
      protein_g: 0.5,
      carbs_g: 6,
      fat_g: 0,
    },
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6UT-BMiFWkRRlofRSNRbtgiRpj0lbLwACPNLPAWm-JtJ913LAPz0r-nA44FJ7HTL6Bg9y--ua_QR-B4wagKzdnXb6BFRThtD1sa2U2mfZJQDZhjZ1-rWnhUJe_vJPTp1OzI_i74p78X6_Y_1YJrNgPIoOAijjMWtegiQ1siW9ivwLIWYrqQUgvUmFHD3Rff_Yzep5DsuBV12XAFf99u_OEPe5ZXYZR3P7mO7mxRFiT5BZ8MgHE-XM',
      caption: 'FIG 06. INFUSIÓN DE HIBISCO RUBÍ CON HIELO CRISTALINO',
    },
    ingredient_groups: [
      {
        group: 'Infusión Base',
        items: [
          { name: 'Flor de jamaica seca (hibisco)', amount: 35, unit: 'g' },
          { name: 'Vainas de cardamomo verde', amount: 5, unit: 'unidades' },
          { name: 'Agua mineral', amount: 750, unit: 'ml' },
        ],
      },
      {
        group: 'Servicio & Hielo',
        items: [
          { name: 'Cubos de hielo sólido', amount: 6, unit: 'cubos' },
          { name: 'Rodajas de naranja roja deshidratada', amount: 3, unit: 'rodajas' },
        ],
      },
    ],
    steps: [
      {
        order: 1,
        stage_label: 'EXTRACCIÓN',
        condition_label: 'Fuego medio · 5 min',
        instruction:
          'Hierva el hibisco junto al cardamomo en 750 ml de agua durante 5 minutos. Deje reposar hasta enfriar por completo.',
      },
      {
        order: 2,
        stage_label: 'SERVICIO',
        condition_label: 'Vaso alto con hielo',
        instruction:
          'Filtre sobre vasos con hielo abundante y termine con la rodaja de naranja deshidratada para aromática cítrica.',
      },
    ],
  },
];

/**
 * Categorías con sus respectivos conteos calculados dinámicamente
 */
export const recipeCategories = [
  { name: 'Todas', count: mockRecipes.length },
  { name: 'Sopas', count: mockRecipes.filter((r) => r.category === 'Sopas').length },
  { name: 'Complementos', count: 4 },
  { name: 'Pescado', count: mockRecipes.filter((r) => r.category === 'Pescado').length },
  { name: 'Pollo', count: mockRecipes.filter((r) => r.category === 'Pollo').length },
  { name: 'Pasta', count: mockRecipes.filter((r) => r.category === 'Pasta').length },
  { name: 'Bebidas', count: mockRecipes.filter((r) => r.category === 'Bebidas').length },
];

/**
 * Obtener receta con metadatos calculados (orden REC-084, links anterior/siguiente)
 */
export function getRecipeWithMeta(slug: string) {
  const index = mockRecipes.findIndex((r) => r.slug === slug);
  if (index === -1) return null;

  const recipe = mockRecipes[index];
  const code = `REC-${String(index + 1).padStart(3, '0')}`;

  const prev = index > 0 ? { title: mockRecipes[index - 1].title, slug: mockRecipes[index - 1].slug } : undefined;
  const next =
    index < mockRecipes.length - 1
      ? { title: mockRecipes[index + 1].title, slug: mockRecipes[index + 1].slug }
      : undefined;

  // Cálculos nutricionales derivados
  const vdr_percentage = Math.round((recipe.nutrition.kcal / 2000) * 100);

  // Porcentajes de macronutrientes basados en aporte calórico (4 kcal/g proteína y carbos, 9 kcal/g grasa)
  const proteinKcal = recipe.nutrition.protein_g * 4;
  const carbsKcal = recipe.nutrition.carbs_g * 4;
  const fatKcal = recipe.nutrition.fat_g * 9;
  const totalMacroKcal = proteinKcal + carbsKcal + fatKcal || 1;

  const macro_percentages = {
    protein: Math.round((proteinKcal / totalMacroKcal) * 100),
    carbs: Math.round((carbsKcal / totalMacroKcal) * 100),
    fat: Math.round((fatKcal / totalMacroKcal) * 100),
  };

  return {
    recipe,
    meta: {
      code,
      total_time_min: recipe.time.prep_min + recipe.time.cook_min,
      vdr_percentage,
      macro_percentages,
      navigation: { prev, next },
    },
  };
}
