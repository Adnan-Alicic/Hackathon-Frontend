import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import samplePic from '../assets/lalala.png';
import { Logo } from '../components/Logo';

export const Dashboard = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState()

  // axios
  // .get(`http://localhost:5001/meal/weekly-plan`, {
  //     userId: window.localStorage.getItem('userId')
  // })
  // .then((res) => {
  //   console.log('RES', res.data);
  //   setData(res.data)
  // });

  const data = {
    Monday: {
      Breakfast: 'Omelet with spinach and feta cheese',
      Lunch: 'Grilled salmon with roasted vegetables',
      Dinner: 'Stuffed peppers with quinoa and black beans',
    },
    Tuesday: {
      Breakfast: 'Yogurt with fruit and granola',
      Lunch: 'Soup and salad',
      Dinner: 'Veggie stir-fry with brown rice',
    },
    Wednesday: {
      Breakfast: 'Scrambled eggs with bell peppers and mushrooms',
      Lunch: 'Tuna sandwich with a side of fruit',
      Dinner: 'Grilled chicken and roasted potatoes',
    },
    Thursday: {
      Breakfast: 'Smoothie bowl with berries and coconut flakes',
      Lunch: 'Burrito bowl with black beans and corn',
      Dinner: 'Vegetarian lasagna with spinach and ricotta cheese',
    },
    Friday: {
      Breakfast: 'Oatmeal with banana and almond butter',
      Lunch: 'Grilled cheese and tomato soup',
      Dinner: 'Curry with chickpeas and vegetables',
    },
    Saturday: {
      Breakfast: 'Pancakes with fresh fruit',
      Lunch: 'Sushi with edamame and seaweed salad',
      Dinner: 'Veggie burgers with avocado and sweet potato fries',
    },
    Sunday: {
      Breakfast: 'Eggs Benedict',
      Lunch: 'Grilled shrimp and vegetable kebabs',
      Dinner: 'Roasted vegetable quinoa bowl',
    },
  };

  console.log('🚀 ~ file: Dashboard.jsx:192 ~ Dashboard ~ data:', data);
  return (
    <Container>
      <Logo />

      <Header>7 Day meal prep plan</Header>
      <Wrapper>
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
            Loading user data...
          </div>
        ) : (
          <>
            <Tooltip title='View more details' placement='bottom'>
              <Card onClick={() => navigate('/dashboard/Monday')}>
                <CardHeader>MON</CardHeader>
                <CardContent>
                  <ImageStyle src={samplePic} alt='' />
                  <ol
                    style={{
                      margin: 0,
                      marginTop: '15px',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      marginLeft: '10px',
                    }}
                  >
                    {Object.values(data.Monday).map((item) => (
                      <li style={{ marginTop: '7px' }} key={item}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Tooltip>

            <Tooltip title='View more details' placement='bottom'>
              <Card onClick={() => navigate('/dashboard/Tuesday')}>
                <CardHeader>TUE</CardHeader>
                <CardContent>
                  <ImageStyle src={samplePic} alt='' />
                  <ol
                    style={{
                      margin: 0,
                      marginTop: '15px',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      marginLeft: '10px',
                    }}
                  >
                    {Object.values(data.Tuesday).map((item) => (
                      <li style={{ marginTop: '7px' }} key={item}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Tooltip>
            <Tooltip title='View more details' placement='bottom'>
              <Card onClick={() => navigate('/dashboard/Wednesday')}>
                <CardHeader>WED</CardHeader>
                <CardContent>
                  <ImageStyle src={samplePic} alt='' />
                  <ol
                    style={{
                      margin: 0,
                      marginTop: '15px',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      marginLeft: '10px',
                    }}
                  >
                    {Object.values(data.Wednesday).map((item) => (
                      <li style={{ marginTop: '7px' }} key={item}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Tooltip>
            <Tooltip title='View more details' placement='bottom'>
              <Card onClick={() => navigate('/dashboard/Thursday')}>
                <CardHeader>THU</CardHeader>
                <CardContent>
                  <ImageStyle src={samplePic} alt='' />
                  <ol
                    style={{
                      margin: 0,
                      marginTop: '15px',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      marginLeft: '10px',
                    }}
                  >
                    {Object.values(data.Thursday).map((item) => (
                      <li style={{ marginTop: '7px' }} key={item}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Tooltip>
            <Tooltip title='View more details' placement='bottom'>
              <Card onClick={() => navigate('/dashboard/Friday')}>
                <CardHeader>FRI</CardHeader>
                <CardContent>
                  <ImageStyle src={samplePic} alt='' />
                  <ol
                    style={{
                      margin: 0,
                      marginTop: '15px',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      marginLeft: '10px',
                    }}
                  >
                    {Object.values(data.Friday).map((item) => (
                      <li style={{ marginTop: '7px' }} key={item}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Tooltip>
            <Tooltip title='View more details' placement='bottom'>
              <Card onClick={() => navigate('/dashboard/Saturday')}>
                <CardHeader>SAT</CardHeader>
                <CardContent>
                  <ImageStyle src={samplePic} alt='' />
                  <ol
                    style={{
                      margin: 0,
                      marginTop: '15px',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      marginLeft: '10px',
                    }}
                  >
                    {Object.values(data.Sunday).map((item) => (
                      <li style={{ marginTop: '7px' }} key={item}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Tooltip>
            <Tooltip title='View more details' placement='bottom'>
              <Card onClick={() => navigate('/dashboard/Sunday')}>
                <CardHeader style={{ background: 'orange' }}>SUN</CardHeader>
                <CardContent>
                  <ImageStyle src={samplePic} alt='' />
                  <ol
                    style={{
                      margin: 0,
                      marginTop: '15px',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      marginLeft: '10px',
                    }}
                  >
                    {Object.values(data.Monday).map((item) => (
                      <li style={{ marginTop: '7px' }} key={item}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Tooltip>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px;
  width: 100%;
`;

const Card = styled.div`
  position: relative;
  height: 400px;
  width: 170px;
`;



const ImageStyle = styled.img`
  width: 127px;
  height: 106px;
  border-radius: 5px;
`;

const CardContent = styled.div`
  width: 147px;
  height: 346px;
  background: #f7eddb;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const CardHeader = styled.div`
  background: #899275;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 5px;
  font-size: 25px;
`;

const Wrapper = styled.div`
  background: #cbcfc3;
  margin-top: 20px;
  width: 1302px;
  height: 480px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const Header = styled.div`
  height: 100px;
  border-radius: 5px;
  background: #c05c35;
  margin-top: 20px;
  width: 1362px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Poppins';
  font-size: 30px;
`;
