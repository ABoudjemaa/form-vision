import { FC, useMemo, useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import ratingControlTester from './components/ratingControlTester';
import schema from './schema.json';
import uischema from './uischema.json';
import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';
import RatingControl from './components/RatingControl';
import NameControl from './components/NameControl';
import nameControlTester from './components/nameControlTester';
import TextControlTester from './components/TextControlTester';
import TextControl from './components/TextControl';

const initialData = {
  user: {
    a08: "John Doe",
    a09: "Experienced in React, TypeScript and UI development"
  },
  item: {
    s01: ["vendor", "subcontractor"],
    p02: "no",
    i01: [
      { country: "France", percent: 60 },
      { country: "Germany", percent: 30 },
      { country: "United Kingdom of Great Britain and Northern Ireland", percent: 10 }
    ]
  }
};

const renderers = [
  ...vanillaRenderers,
  { tester: ratingControlTester, renderer: RatingControl },
  // { tester: nameControlTester, renderer: NameControl },
  { tester: TextControlTester, renderer: TextControl },
];

const JsonFormsDemo: FC = () => {
  const [data, setData] = useState<object>(initialData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const clearData = () => {
    setData({});
  };
  return (
    <>
      <div>
        <pre id="boundData">{stringifiedData}</pre>
      </div>
      <button
        onClick={clearData}
        color="primary"
        data-testid="clear-data">
        Clear data
      </button>
      <h4>Rendered form</h4>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={vanillaCells}
        onChange={({ data }) => setData(data)}
      />

    </>
  );
};

export default JsonFormsDemo;