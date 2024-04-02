import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from './FriendList.module.css';
export default function FriendList ({friends}) {
    return (
        <ul className={css.friendsList} >
            {friends.map((item) => (
                <li key={item.id} className={css.listItem}>
                    <FriendListItem item={item}/>
                </li>
            ))}
        </ul>
    );
}