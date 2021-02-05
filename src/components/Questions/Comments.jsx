import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <br />
            <h4>Comments?</h4>
            <input type="number" onChange={e => {
                let comments = e.target.value;
                console.log(comments);
                dispatch({
                    type: 'ADD_COMMENTS',
                    payload: {
                        comments,
                    }
                });
            }} />
            <button onClick={e => {
                history.push('/5');
            }}>Next</button>
        </>
    );
}

export default Comments;