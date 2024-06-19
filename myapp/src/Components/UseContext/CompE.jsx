import React, { useContext } from "react";
import CompF from "./CompF";
import { UserContext, ChannelContext } from "../../App";

function CompE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default CompE;
