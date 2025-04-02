import { FC, useState } from 'react';

interface RatingProps {
  id?: string;
  value: number;
  updateValue: (newValue: number) => void;
}

export const Rating: FC<RatingProps> = ({ id, value, updateValue }) => {
  const [hoverAt, setHoverAt] = useState<number | null>(null);

  return (
    <div id="#/properties/rating" className="rating">
      <span style={{ marginTop: '0.8em' }}>
        Rating
      </span>
      <div style={{ cursor: 'pointer', fontSize: '18px' }}>
        {[0, 1, 2, 3, 4].map(i => {
          const fullStars = hoverAt ?? value;

          return (
            <span
              onMouseOver={() => setHoverAt(i + 1)}
              onMouseOut={() => setHoverAt(null)}
              onClick={() => updateValue(i + 1)}
              key={`${id}_${i}`}>
              {i < fullStars ? '\u2605' : '\u2606'}
            </span>
          );
        })}
      </div>
    </div>
  );
};