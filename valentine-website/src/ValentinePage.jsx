import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ValentinePage.css';

function ValentinePage() {
  const navigate = useNavigate();
  const [noSize, setNoSize] = useState(100);
  const [yesSize, setYesSize] = useState(100);

  const handleNoClick = () => {
    setNoSize(prev => Math.max(prev - 20, 20));
    setYesSize(prev => prev + 20);
  };

  const handleYesClick = () => {
    navigate('/letter');
  };

  return (
    <div className="valentine-container">
      <h1 className="valentine-title">Will you be my Valentine?</h1>
      <p className="valentine-subtitle">(Forever)</p>

      <div className="buttons-container">
        <button
          className="yes-button"
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
