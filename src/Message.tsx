import * as React from "react";

interface Props {
  show: boolean;
  message: string;
}

const Message = ({ show, message }: Props) => <div>{show && message}</div>;

export default Message;
