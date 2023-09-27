import './NavBarOption.css'
function NavBarOption(props)
{
    return (
        <button className="Button">{props.type}</button>
    );
}
export default NavBarOption;