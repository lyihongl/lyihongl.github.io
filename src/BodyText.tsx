import React from "react";
import "./App.css";

//function BodyText(children: string, className?: string) {
//return <div className={`body-text ${className}`}>{children}</div>;
//}
type Props = {
  className?: string;
};
const BodyText: React.FC<Props> = ({ className, children }) => (
  <div className={`body-text ${className}`}>{children}</div>
);

export default BodyText;
