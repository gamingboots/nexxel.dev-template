import { FC, ReactNode } from "react";

const Text: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="text">{children}</div>;
};

export default Text;
