import { FriendListItem } from "./FriendListItem"
import css from "./FriendList.module.css"

export const FriendList = (props) => {
    return (
        <ul className={css.friendList}>
            <FriendListItem friends={ props.friends } />
        </ul>
    )
}