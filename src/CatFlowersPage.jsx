import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CatFlowersPage.css';
import catImage from './assets/cat.png';

function CatFlowersPage() {
  const navigate = useNavigate();
  const [declineAttempts, setDeclineAttempts] = useState(0);
  const [declinePosition, setDeclinePosition] = useState({ top: '50%', left: '50%' });
  const [showMessage, setShowMessage] = useState(false);
  const declineButtonRef = useRef(null);

  const handleAccept = () => {
    navigate('/valentine');
  };

  const handleDeclineHover = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setDeclinePosition({
      top: `${randomY}px`,
      left: `${randomX}px`
    });

    const newCount = declineAttempts + 1;
    setDeclineAttempts(newCount);

    // Show message and cycle through them
    setShowMessage(true);
  };

  const messages = [
    "Wow you hate me",
    "Yuumi is disappointed",
    "How dare you",
    "Not happening",
    "Nice try",
    "I thought you didn't flowers that would die?",
    "Still trying?",
    "You must really hate me...",
    "Please just accept the flowers 🙄",
    "..."
  ];

  return (
    <div className="cat-container">
      <div className="cat-content">
        <h1 className="cat-title">for you</h1>

        <div className="cat-image-wrapper">
          <img
            src={catImage}
            alt="Cat with flowers"
            className="cat-image"
          />
        </div>

        <div className="message-container">
          {showMessage && (
            <p className="funny-message">{messages[Math.min(declineAttempts - 1, messages.length - 1)]}</p>
          )}
        </div>

        <div className="cat-buttons-container">
          <button
            className="accept-button"
            onClick={handleAccept}
          >
            Accept
          </button>

          <button
            ref={declineButtonRef}
            className="decline-button"
            onMouseEnter={handleDeclineHover}
            onClick={handleDeclineHover}
            style={{
              position: declineAttempts >= 1 ? 'fixed' : 'static',
              top: declineAttempts >= 1 ? declinePosition.top : 'auto',
              left: declineAttempts >= 1 ? declinePosition.left : 'auto',
              transform: declineAttempts >= 1 ? 'translate(-50%, -50%)' : 'none',
              transition: 'all 0.3s ease',
              zIndex: 1000
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default CatFlowersPage;
