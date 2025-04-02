import { withJsonFormsControlProps } from '@jsonforms/react';
import { Rating } from './Rating';

interface RatingControlProps {
  path: string;
  data: number;
  handleChange(path: string, value: number): void;
}

const RatingControl = ({ data, handleChange, path }: RatingControlProps) => (
  <Rating
    value={data}
    updateValue={(newValue: number) => handleChange(path, newValue)}
  />
);

const RatingControlWithJsonForms = withJsonFormsControlProps(RatingControl);
export default RatingControlWithJsonForms;