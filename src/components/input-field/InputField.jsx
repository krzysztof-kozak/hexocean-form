import { useState } from 'react';

export default function InputField({ id, label, type, value, onInputChange }) {
  const [touched, setTouched] = useState(false);
  return (
    <>
      <label htmlFor={id} className="basis-full text-sm font-medium">
        {label}
      </label>
      <input
        className="basis-full rounded-md"
        type={type}
        name={id}
        id={id}
        value={value}
        min={1}
        max={10}
        onInput={(e) => onInputChange({ [id]: e.target.value })}
        onBlur={() => setTouched(true)}
      />
      <div className="min-h-[20px]">
        {!value && touched && <p className="w-56 basis-full text-sm text-red-500">This field is required</p>}
      </div>
    </>
  );
}