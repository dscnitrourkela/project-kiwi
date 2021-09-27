import React, { useState } from 'react';

// Components
import { LoginCard, ProfileCard } from '.';

const AuthComponent = () => {
  const [login] = useState(false);
  return <>{login ? <ProfileCard /> : <LoginCard />}</>;
};

export default AuthComponent;
