import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ValentinePage.css';

function ValentinePage() {
  const navigate = useNavigate();
  const [noSize, setNoSize] = useState(100);
  const [yesSize, setYesSize] = useState(100);
  const [noClickCount, setNoClickCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');

  const noMessages = [
    "So you hate me",
    "That's ok",
    "I will just kill myself",
    "I'm gonna do it if you really don't want to be my valentine",
    "I'm serious",
    "Ok wow.",
    "Bleh",
    "I SAID BLEH",
    "You are being my valentine whether you like it or not",
    "..."
  ];

  const handleNoClick = () => {
    setNoSize(prev => Math.max(prev - 20, 20));
    setYesSize(prev => prev + 20);
    setCurrentMessage(noMessages[Math.min(noClickCount, noMessages.length - 1)]);
    setNoClickCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    navigate('/letter');
  };

  return (
    <div className="valentine-container">
      <h1 className="valentine-title">Will you be my Valentine?</h1>
      <p className="valentine-subtitle">(Forever)</p>

      <div className="message-container">
        {currentMessage && (
          <p className="no-message">{currentMessage}</p>
        )}
      </div>

      <div className="buttons-container">
        <button
          className={`yes-button ${yesSize > 140 ? 'shake' : ''} ${yesSize > 200 ? 'shake-intense' : ''}`}
          onClick={handleYesClick}
          style={{
            fontSize: `${yesSize}%`,
            padding: `${yesSize / 5}px ${yesSize / 3}px`
          }}
        >
          Yes
        </button>

        <button
          className="no-button"
          onClick={handleNoClick}
          style={{
            fontSize: `${noSize}%`,
            padding: `${noSize / 5}px ${noSize / 3}px`
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default ValentinePage;
