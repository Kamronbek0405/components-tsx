import React from 'react';

interface SelectProps {
  options: string[];
  value: string;    
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
  className: string;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange, className }) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
