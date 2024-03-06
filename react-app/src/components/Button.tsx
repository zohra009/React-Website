import { ReactNode } from "react";

interface Props {
  children: string;
  // color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
