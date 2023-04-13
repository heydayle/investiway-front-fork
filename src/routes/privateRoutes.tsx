import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Statistics from '../pages/statistics';
import Plans from '../pages/plans';
import Notes from '../pages/notes';
import SignIn from '../pages/auth/signin';
import Goal from '../pages/goal';

interface ComponentProps {
  isAuthenticated: boolean;
}
const PrivateRoutes = ({ isAuthenticated }: ComponentProps) => {
  return isAuthenticated ? (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/goal" element={<Goal />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/note" element={<Notes />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/auth" element={<SignIn />} />
    </Routes>
  );
};
export default PrivateRoutes;
