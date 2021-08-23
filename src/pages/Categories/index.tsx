import React, { useState, useEffect, useCallback } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';
import Loading from 'components/Loading';
import Drink from 'components/Drink';

import api from 'services/api';

import { CategoryContainer, CategoryContent, DrinksContent } from './styles';

interface ICategory {
  strCategory: string;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectCategory] = useState<string>();
  const [parsedDrinks, setParsedDrinks] = useState([]);

  const fetchCategories = useCallback(async () => {
    try {
      const { data } = await api.get('list.php?c=list');
      setCategories(data.drinks);
    } catch (error) {}
  }, []);

  const fetchDrinksByCategory = useCallback(async () => {
    if (selectedCategory) {
      try {
        const { data } = await api.get(`filter.php?c=${selectedCategory}`);
        setParsedDrinks(data.drinks);
      } catch (err) {
        return <h3>Houve um problema com a solicitação :/</h3>;
      }
    }
  }, [selectedCategory]);

  function handleSelectCategory(categorySelected: string) {
    setSelectCategory(categorySelected);
  }
  useEffect(() => {
    fetchCategories();
    fetchDrinksByCategory();
  }, [fetchCategories, fetchDrinksByCategory]);

  return (
    <>
      <Header />
      <Container>
        <CategoryContainer>
          <h2>Lista de Categorias</h2>
          {categories.length ? (
            <CategoryContent>
              <ul>
                {categories.map(({ strCategory }) => {
                  return (
                    <li
                      key={strCategory}
                      onClick={() => handleSelectCategory(strCategory)}
                    >
                      {strCategory}
                    </li>
                  );
                })}
              </ul>
            </CategoryContent>
          ) : (
            <Loading />
          )}
          {parsedDrinks.length !== 0 && (
            <DrinksContent>
              <h2>Drinks</h2>
              <ul>
                {parsedDrinks ? (
                  parsedDrinks.map(({ strDrink, strDrinkThumb, idDrink }) => {
                    return (
                      <Drink
                        key={idDrink}
                        strDrinkThumb={strDrinkThumb}
                        strDrink={strDrink}
                        idDrink={idDrink}
                      />
                    );
                  })
                ) : (
                  <Loading />
                )}
              </ul>
            </DrinksContent>
          )}
        </CategoryContainer>
      </Container>
    </>
  );
};

export default CategoryList;
