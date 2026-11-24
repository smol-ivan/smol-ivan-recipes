export type RecipeRole = 'complete' | 'protein' | 'base' | 'side' | 'sauce';

export interface RecipeTime {
  prep_min: number;
  cook_min: number;
}

export interface RecipeNutrition {
  kcal: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
}

export interface RecipeImage {
  src: string;
  caption?: string;
  target_internal_temp_c?: number;
}

export interface IngredientItem {
  name: string;
  amount: number;
  unit: string;
  note?: string;
}

export interface IngredientGroup {
  group: string;
  items: IngredientItem[];
}

export interface RecipeStep {
  order: number;
  stage_label?: string;
  condition_label?: string;
  instruction: string;
}

export type RecipeExtraType = 'substitution' | 'technique' | 'equipment' | 'note';

export interface RecipeExtra {
  type: RecipeExtraType;
  related_to: string;
  content: string;
  added_at: string | Date;
}

/**
 * Esquema de datos para cada receta (coincide con el frontmatter en Markdown/Content Collections).
 */
export interface Recipe {
  title: string;
  slug: string;
  category: string;
  role?: RecipeRole;
  description: string;
  tags: string[];
  servings: number;
  time: RecipeTime;
  nutrition: RecipeNutrition;
  image: RecipeImage;
  ingredient_groups: IngredientGroup[];
  steps: RecipeStep[];
  tips?: string[];
  extras?: RecipeExtra[];
}

/**
 * Datos calculados o derivados en tiempo de build/render
 */
export interface RecipeNavigationItem {
  title: string;
  slug: string;
}

export interface RecipeComputedMeta {
  code: string;
  total_time_min: number;
  vdr_percentage: number;
  macro_percentages: {
    protein: number;
    carbs: number;
    fat: number;
  };
  navigation?: {
    prev?: RecipeNavigationItem;
    next?: RecipeNavigationItem;
  };
}
