import { useState } from 'react';
import Button from './Button.jsx';
import Card from './Card.jsx';

function Section({ children, title }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card className="section-card">
      <div className="section-header">
        <h2>{title}</h2>
        <Button
          className="section-toggle"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          variant="secondary"
        >
          {isOpen ? 'Hide' : 'Show'}
        </Button>
      </div>
      {isOpen && <div className="section-content">{children}</div>}
    </Card>
  );
}

export default Section;
