import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  register: UseFormRegister<any>;
}

export const Input = ({ name, register, ...rest }: InputPros) => {
  return <input {...register(name)} {...rest} />;
};
