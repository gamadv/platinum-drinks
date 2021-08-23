import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import api from 'services/api';

import Container from 'components/Container';
import Header from 'components/Header';
import Loading from 'components/Loading';

import { DrinkDetailsContent } from './styles';

const DrinkDetails: React.FC = () => {
  const [parsedDrinkInfo, setParsedDrinkInfo] = useState<IDrinkDetails>(
    {} as IDrinkDetails
  );
  const [parsedTags, setParsedTags] = useState<string[]>([]);

  const { id } = useParams<DrinkParams>();

  const fetchDrinkSelected = useCallback(async () => {
    if (id) {
      try {
        const { data } = await api.get<IDrinkProps>(`lookup.php?i=${id}`);

        const parseTags = data.drinks[0].strTags?.split(',');

        setParsedTags(parseTags ?? []);
        setParsedDrinkInfo(data.drinks[0]);
      } catch (error) {}
    }
  }, [id]);

  const parsedIngredients = useMemo(() => {
    const ingredients = Object.keys(parsedDrinkInfo).reduce((acc, key) => {
      if (key.includes('strIngredient')) {
        acc++;
      }
      return acc;
    }, 0);

    const getIngredientWithMeasure = [];

    for (let i = 1; i <= ingredients; i++) {
      if (
        parsedDrinkInfo[`strMeasure${i}`] ||
        parsedDrinkInfo[`strIngredient${i}`]
      ) {
        getIngredientWithMeasure.push(
          `${parsedDrinkInfo[`strMeasure${i}`]} ${
            parsedDrinkInfo[`strIngredient${i}`]
          }`
        );
      }
    }

    return getIngredientWithMeasure;
  }, [parsedDrinkInfo]);

  useEffect(() => {
    fetchDrinkSelected();
  }, [fetchDrinkSelected]);

  return (
    <>
      <Header />
      <Container>
        <DrinkDetailsContent>
          {parsedDrinkInfo ? (
            <section>
              <div>
                {parsedDrinkInfo.strDrinkThumb && (
                  <img
                    src={parsedDrinkInfo.strDrinkThumb}
                    alt={parsedDrinkInfo.strDrink}
                  />
                )}
              </div>
              <div className="info-container">
                <h2>{parsedDrinkInfo.strDrink}</h2>
                <ul>
                  {parsedTags.map((tag, index) => {
                    return <li key={index}>{tag}</li>;
                  })}
                </ul>
                {parsedIngredients && (
                  <div>
                    <h2>Ingredientes</h2>
                    <ul>
                      {parsedIngredients.map((ingredient, index) => {
                        return <li key={index}>{ingredient}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ) : (
            <Loading />
          )}
        </DrinkDetailsContent>
      </Container>
    </>
  );
};

export default DrinkDetails;
