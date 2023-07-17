import React, { use } from 'react';
import { API } from '../libs/api';
export const TestApi = () => {
  const apiResponse = use(API.get('gpt/session'));

  console.log({ apiResponse });

  return (
    <div>
      <h1>DATA</h1>
    </div>
  );
};
