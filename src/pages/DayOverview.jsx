/* eslint-disable no-unused-vars */
import React from 'react';
import landingPicture from '../assets/lalala.png';
import styled from '@emotion/styled';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
export const DayOverview = () => {
  const landingResponse = {
    title: 'Mexican Rice',
    ingredients: [
      '- 2 tablespoons vegetable oil',
      '- 1 onion, chopped',
      '- 2 cloves garlic, minced',
      '- 1 (14.5 ounce) can diced tomatoes',
      '- 2 cups chicken broth',
      '- 1 teaspoon chili powder',
      '- 1/2 teaspoon cumin',
      '- 1/2 teaspoon salt',
      '- 1 1/2 cups long grain white rice',
    ],
    preparation: [
      '1. Heat oil in a large saucepan over medium heat. Add the onion and garlic and cook until the onion is translucent, about 5 minutes.',
      '2. Add the tomatoes, chicken broth, chili powder, cumin, and salt. Bring to a boil.',
      '3. Stir in the rice. Cover and reduce heat to low. Simmer for 20 minutes, or until the rice is tender.',
      '4. Fluff with a fork and serve.',
    ],
  };

  const data = 'sds'
  // const location = useLocation();
  // const day = location.pathname.split('/').pop();

  // console.log(day);

  // const [data, setData] = useState();
  // axios
  //   .get(`http://localhost:5001/meal/get-daily-meals`, {
  //     day: day,
  //     userId: window.localStorage.getItem('userId'),
  //   })
  //   .then((res) => {
  //     setData(res.data);
  //     console.log('RES', res.data);
  //   });

  return (
    <Container>
      {!data ? (
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <CircularProgress />
          Fetching user daily meal plan...
        </div>
      ) : (
        <>
          <DownWrapper>
            <LandingPic src={landingPicture} alt='' />
            <MealName> {landingResponse.title} </MealName>
            <Ingredients>
              <IngredientsHeader>Ingredients</IngredientsHeader>
              <IngredientsTxt>
                <ul>
                  {landingResponse.ingredients.map((item) => (
                    <li key={item}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              </IngredientsTxt>
            </Ingredients>
            <Recipe>
              <RecipeHeader>Recipe</RecipeHeader>
              {
                <ul style={{ listStyleType: 'none' }}>
                  {landingResponse.preparation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              }
            </Recipe>
          </DownWrapper>
          <DownWrapper>
            <LandingPic src={landingPicture} alt='' />
            <MealName> {landingResponse.title} </MealName>
            <Ingredients>
              <IngredientsHeader>Ingredients</IngredientsHeader>
              <IngredientsTxt>
                <ul>
                  {landingResponse.ingredients.map((item) => (
                    <li key={item}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              </IngredientsTxt>
            </Ingredients>
            <Recipe>
              <RecipeHeader>Recipe</RecipeHeader>
              {
                <ul style={{ listStyleType: 'none' }}>
                  {landingResponse.preparation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              }
            </Recipe>
          </DownWrapper>
          <DownWrapper>
            <LandingPic src={landingPicture} alt='' />
            <MealName> {landingResponse.title} </MealName>
            <Ingredients>
              <IngredientsHeader>Ingredients</IngredientsHeader>
              <IngredientsTxt>
                <ul>
                  {landingResponse.ingredients.map((item) => (
                    <li key={item}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              </IngredientsTxt>
            </Ingredients>
            <Recipe>
              <RecipeHeader>Recipe</RecipeHeader>
              {
                <ul style={{ listStyleType: 'none' }}>
                  {landingResponse.preparation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              }
            </Recipe>
          </DownWrapper>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const DownWrapper = styled.div`
  margin-top: 50px;
  background-color: #cbcfc3;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 20px;
`;

const IngredientsHeader = styled.div`
  background-color: #c05c35;
  position: absolute;
  width: 379px;
  height: 30px;
  left: 16px;
  top: 229px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;
  color: white;
  font-weight: 400;
`;

const IngredientsTxt = styled.div`
  background-color: #eda24e;
  position: absolute;
  width: 379px;
  left: 16px;
  top: 259px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  border-radius: 0px 0px 5px 5px;
  color: white;
  font-weight: 400;
`;

const Recipe = styled.div`
  background-color: #eda24e;
  position: absolute;
  left: 420px;
  top: 120px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  line-break: normal;
  margin-right: 16px;
  padding: 16px;
`;

const RecipeHeader = styled.div`
  width: 191px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
`;
const LandingPic = styled.img`
  position: absolute;
  left: 16px;
  top: 16px;
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
`;

const MealName = styled.div`
  position: absolute;
  left: 350px;
  top: 50px;
  background: #c05c35;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  width: 236px;
  height: 46px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: center;
`;
