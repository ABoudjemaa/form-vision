import { withJsonFormsControlProps } from '@jsonforms/react';
import { Name } from './Name';

interface NameControlProps {
  data: string;
  handleChange(path: string, value: string): void;
  path: string;
}

const NameControl = ({ data, handleChange, path }: NameControlProps) => {
  console.log('NameControl', data, handleChange, path);
  return (
    <Name
      value={data}
      updateValue={(newValue: string) => handleChange(path, newValue)}
    />
  );
}

const NameControlWithJsonForms = withJsonFormsControlProps(NameControl);
export default NameControlWithJsonForms;