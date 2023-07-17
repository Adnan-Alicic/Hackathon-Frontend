/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Logo } from '../components/Logo';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import landingPicture from '../assets/lalala.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const names = ['Lactose free', 'Gluten free', 'Sugar free'];
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);

  const [landingResponse, setLandingResponse] = useState()

  // const landingResponse = {
  //   title: 'Mexican Rice',
  //   ingredients: [
  //     '- 2 tablespoons vegetable oil',
  //     '- 1 onion, chopped',
  //     '- 2 cloves garlic, minced',
  //     '- 1 (14.5 ounce) can diced tomatoes',
  //     '- 2 cups chicken broth',
  //     '- 1 teaspoon chili powder',
  //     '- 1/2 teaspoon cumin',
  //     '- 1/2 teaspoon salt',
  //     '- 1 1/2 cups long grain white rice',
  //   ],
  //   preparation: [
  //     '1. Heat oil in a large saucepan over medium heat. Add the onion and garlic and cook until the onion is translucent, about 5 minutes.',
  //     '2. Add the tomatoes, chicken broth, chili powder, cumin, and salt. Bring to a boil.',
  //     '3. Stir in the rice. Cover and reduce heat to low. Simmer for 20 minutes, or until the rice is tender.',
  //     '4. Fluff with a fork and serve.',
  //   ],
  // };

  function getStyles(name, excluded, theme) {
    return {
      fontWeight:
        excluded.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [title, setTitle] = useState('');
  const [excluded, setExcluded] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setExcluded(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleSubmit = () => {
   
      axios
        .post(`http://localhost:5001/meal/get-meal`, {
            title,
            excluded: excluded.join(', ')
        })
        .then((res) => {
          setLoader(false);
          setLandingResponse(res.data)
          console.log('RES', res.data);
        });
    
  };

  return (
    <Container>
      <Wrapper>
        <Logo />
        <ButtonWrapper>
          <Btn onClick={() => navigate('/sign-in')}>Login</Btn>
          <Btn onClick={() => navigate('/sign-up')}>Sign up</Btn>
        </ButtonWrapper>
      </Wrapper>

      <Content>
        <div
          style={{
            height: '600px',
            width: '1000px',
            borderRadius: '20px',
            background: 'rgb(192,92,53, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <SearchTxt>Search</SearchTxt>
          <Input
            placeholder='enter your desired meal'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <FormControl sx={{ m: 1, width: '600px', marginBottom: '30px' }}>
            <InputLabel id='demo-multiple-chip-label'>Allergies/Preferences</InputLabel>
            <Select
              labelId='demo-multiple-chip-label'
              id='demo-multiple-chip'
              multiple
              value={excluded}
              onChange={handleChange}
              input={
                <OutlinedInput
                  id='select-multiple-chip'
                  label='Allergies/Preferences'
                  style={{ background: 'white' }}
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name} style={getStyles(name, excluded, theme)}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Btn
            onClick={() => {
              setIsSubmitted(true);
              setLoader(true);
              handleSubmit();
            }}
          >
           {loader ? 'Loading ...' : 'Generate meal'}
          </Btn>
        </div>

        {isSubmitted && landingResponse && (
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
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
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
const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

const ButtonWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.div`
  display: flex;
  width: 235px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background: #c05c35;
  border-radius: 30px;
  height: 40px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 36px;
  color: #ffffff;
  margin-right: 16px;
`;

const SearchTxt = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 35px;
  line-height: 60px;
  color: #536036;
  margin-bottom: 30px;
`;

const DownWrapper = styled.div`
  margin-top: 100px;
  background-color: #cbcfc3;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 590px;
  height: 30px;
  padding: 5px;
  border: 1px solid #536036;
  border-radius: 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 30px;
  color: black;
  ::placeholder {
    padding-left: 10px;
  }
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
