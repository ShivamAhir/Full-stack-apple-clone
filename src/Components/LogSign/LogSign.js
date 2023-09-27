import LogOut from "./LogOut";
import LogIn from "./Login";


function LogSign(props)
{
    { if (props.logIn=="true") {
        return <LogOut />;
      } else {
        return <LogIn />;
     }
    }
}
export default LogSign;