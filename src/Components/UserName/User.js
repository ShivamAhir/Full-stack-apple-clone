import './User.css';
function User(props)
{
    var name=props.userName;
    name=name.substring(0, name.indexOf(' '));
    
    return (
        <button className='Button'>{name}</button>
    )
}
export default User;