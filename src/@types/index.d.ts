interface DrinkParams {
  id: string;
}

interface IDrinkDetails {
  strDrink: string;
  [key: string]: string;
}

interface IDrinkProps {
  drinks: IDrinkDetails[];
}

interface ICategory {
  strCategory: string;
}

interface ICategoryList {
  categoryList: ICategory[];
}
