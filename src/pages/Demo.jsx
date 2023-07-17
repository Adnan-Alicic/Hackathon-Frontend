import React, { Suspense } from 'react';
import { TestApi } from '../components/TestApi';

export const Demo = () => {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <TestApi />
    </Suspense>
  );
};
