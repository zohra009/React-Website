import { ReactNode } from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-success" onClick={onClick}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
