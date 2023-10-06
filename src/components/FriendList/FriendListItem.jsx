import css from "./FriendListItem.module.css"
export const FriendListItem = (props) => {
    return (
        props.friends.map((friend) => {
            return (
                <li key={friend.id} className={css.item}>
                    <span className={ friend.isOnline ? css.green : css.red}/>
                    <img src={friend.avatar} alt={friend.name} className={ css.avatar} />
                    <p className={css.name}>{friend.name}</p>
                </li>
            )
        })
    )
}