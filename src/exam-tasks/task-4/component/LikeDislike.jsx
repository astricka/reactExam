import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa';
import css from './LikeDislike.module.css';
import {useReducer} from "react";

const initState = {
    likes: 12,
    dislikes: 2,
    active: null
}

function likeDislikeReducer(state, action) {
    const { likes, dislikes, active }  = state;

    switch (action.type) {
        case 'LIKE':
            return {
                ...state,
                likes: state.likes + 1,
                dislikes: active === "dislike" ? dislikes - 1 : dislikes,
                active: "like",
            };
        case 'DISLIKE':
            return {
                ...state,
                dislikes: state.dislikes + 1,
                likes: active === "like" ? likes - 1 : likes,
                active: "dislike",
            }
    }
}
function LikeDislike() {
    const [state, dispatch] = useReducer(likeDislikeReducer, initState);
    const { likes, dislikes, active } = state;

    return(
      <main className={css.mainContainer}>
          <div className={css.container}>
              <button className={css.btn} onClick={() => active !== "like"? dispatch({ type: 'LIKE' }) : null}>
                  <FaThumbsUp style={{ color: active === "like" ? "blue" : "grey" }} className={css.icons} />
                  {likes}
              </button>
              <button className={css.btn} onClick={() => active !== "dislike"? dispatch({ type: 'DISLIKE' }) : null}>
                  <FaThumbsDown style={{ color: active === "dislike" ? "blue" : "grey" }} className={css.icons} />
                  {dislikes}
              </button>
          </div>
      </main>
    );
}

export default LikeDislike;