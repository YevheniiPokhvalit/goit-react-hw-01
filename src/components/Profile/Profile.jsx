import css from './Profile.module.css';
export default function Profile({name, tag, location, image, stats})

{
    return <div>
        <div>
            <img className={css.profileAvatar}
                src={image}
                alt="User avatar"
                width="300"
            />
            <p className={css.userName}>{name}</p>
            <p className={css.text}>@{tag}</p>
            <p className={css.text}>{location}</p>
        </div>

        <ul className={css.profileList}>
            <li className={css.profileListText}>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li className={css.profileListText}>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li className={css.profileListText}>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>
}