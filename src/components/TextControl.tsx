import { RendererProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

const CustomTextRenderer = (props: RendererProps) => {
  const { label, path, schema, uischema, visible, handleChange, data: value } = props as any;

  if (!visible) {
    return null;
  }

  const isMultiLine = uischema.options?.multi;

  return (
    <div className="control-container">
      {isMultiLine ? (
        <div className="full-width">
          <label className="question-label">{label}</label>
          {schema.description && (
            <div className="description">{schema.description}</div>
          )}
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(path, e.target.value)}
          />
        </div>
      ) : (
        <div className="two-columns">
          <div className="question-column">
            <label className="question-label">{label}</label>
            {schema.description && (
              <div className="description">{schema.description}</div>
            )}
          </div>
          <div className="answer-column">
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(path, e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default withJsonFormsControlProps(CustomTextRenderer);