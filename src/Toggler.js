import React from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isBrokenHeart, toggleIsBrokenHeart] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(true);
  return (
    <div>
      <h2 onClick={toggleIsHappy}>{isHappy ? "🙂" : "🤦"}</h2>
      <h2 onClick={toggleIsBrokenHeart}>{isBrokenHeart ? "💓" : "💔"}</h2>
      <h2 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍎"}</h2>
    </div>
  );
}

export default Toggler;
