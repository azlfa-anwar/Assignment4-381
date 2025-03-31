import React, { useContext } from 'react';
import DisplayStatus from './DisplayStatus';
import { AuthContext } from '../contexts/AuthContext';

function AuthMessage() {
  const { status } = useContext(AuthContext);

  if (!status) {
    return null;
  }

  return (
    <DisplayStatus 
      type={status.type} 
      message={status.message} 
    />
  );
}

export default AuthMessage; 