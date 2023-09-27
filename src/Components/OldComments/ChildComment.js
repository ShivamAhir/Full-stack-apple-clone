import ProductRating from "../Product-Rating/ProductRating";
import './ChildComment.css';

function ChildComment(props){
    const Logo='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=';
    return (
        <div>
            <div className='userBox'>
                <img
                id='userP'
                src={Logo}
                alt='User Profile'
                />
                <span id='Username'>{props.username}</span>
            </div>
            <div>
                <ProductRating rating={props.rating}></ProductRating>
                <div>
                    <p id='comment'>{props.meassage}</p>
                </div>
            </div>
        </div>
    )
}
export default ChildComment;