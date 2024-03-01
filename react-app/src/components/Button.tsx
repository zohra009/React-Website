import { ReactNode } from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children }: Props) => {
  return <button className="btn btn-success"> {children} </button>;
};

export default Button;
