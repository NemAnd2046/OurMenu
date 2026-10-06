import { foods } from "./data";

export const getAllCategories = () => {
	return ["all", ...new Set(foods.map((food) => food.category))].sort((a, b) =>
		a.localeCompare(b),
	);
};
