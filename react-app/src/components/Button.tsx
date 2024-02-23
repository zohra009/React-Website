import { ReactNode } from "react";

interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return <button className="btn btn-success"> {children} </button>;
};

export default Button;
