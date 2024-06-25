import React from "react";
import { UserContext,ChannelContext } from "../../App";
function CompF() {
  return (
    <div className="compfdiv">
        <h4 style={{color:"red"}}>UseContext</h4>
      <UserContext.Consumer>
        {(user) => {
          return(
            <ChannelContext.Consumer>
                {
                    channel =>{
                        return <div>
                            User Context Value {user},Channel Context Value {channel}
                        </div>
                    }
                }
            </ChannelContext.Consumer>
          ) 
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default CompF;
