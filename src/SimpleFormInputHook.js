import React from 'react';
import userInputState from './hooks/useInputState';

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = userInputState('');
  const [password, updatePassword, resetPassword] = userInputState('');

  return (
    <div>
      <h1>Email: {email} & Password: {password}</h1>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="text" value={password} onChange={updatePassword} />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
}
