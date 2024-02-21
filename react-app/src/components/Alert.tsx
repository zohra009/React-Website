//pass text as a prop so define interface

import { ReactNode } from "react";

//adding children will allow us to pass Alert as a HTML tag when we can add HTML tags and content in App.tsx
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary"> {children} </div>;
};

export default Alert;
