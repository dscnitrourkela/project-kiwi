import React, { useState } from 'react';

// Components
import { LoginCard, ProfileCard } from '.';

const AuthComponent = () => {
  const [login] = useState(false);
  return <div>{login ? <ProfileCard /> : <LoginCard />}</div>;
};

export default AuthComponent;
