import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export const Start = () => {
  const navigate = useNavigate();
  const [preferredFood, setPreferredFood] = useState([]);
  const [dislikedFood, setDislikedFood] = useState([]);
  const [diet, setDiet] = useState([]);
  const [allergies, setAllergies] = useState([]);

  const handleAllergiesChange = (event, values) => {
    setAllergies(values);
  };

  const handleDietChange = (event, values) => {
    setDiet(values);
  };
  const handleDislikedFoodChange = (event, values) => {
    setDislikedFood(values);
  };
  const handlePreferredFoodChange = (event, values) => {
    setPreferredFood(values);
  };

  const handleSubmit = () => {
    console.log(
      window.localStorage.getItem('userId'),
      allergies,
      dislikedFood,
      diet,
      preferredFood,
    );

    axios
      .post(`http://localhost:5001/user/update`, {
        userId: window.localStorage.getItem('userId'),
        preferences: { allergies, dislikedFood, diet, preferredFood },
      })
      .then((res) => {
        console.log('RES', res.data);
        navigate('/dashboard')
      });
  };

  return (
    <Container>
      <h2>Please complete your profile</h2>
      <Autocomplete
        multiple
        freeSolo
        options={allergies}
        onChange={handleAllergiesChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={option} variant='outlined' label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => <TextField {...params} label='Allergies' variant='outlined' />}
      />
      <br></br>
      <Autocomplete
        multiple
        freeSolo
        options={diet}
        onChange={handleDietChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={option} variant='outlined' label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => <TextField {...params} label='Diet' variant='outlined' />}
      />
      <br></br>
      <Autocomplete
        multiple
        freeSolo
        options={dislikedFood}
        onChange={handleDislikedFoodChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={option} variant='outlined' label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => <TextField {...params} label='DislikedFood' variant='outlined' />}
      />
      <br></br>

      <Autocomplete
        multiple
        freeSolo
        options={preferredFood}
        onChange={handlePreferredFoodChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={option} variant='outlined' label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => <TextField {...params} label='PreferredFood' variant='outlined' />}
      />
      <br></br>

      <Button onClick={handleSubmit}>Complete my profile</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 200px;
`;

const Button = styled.div`
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
