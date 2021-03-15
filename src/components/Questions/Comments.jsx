import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Comments({classes}) {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <br />
            <h4>Comments?</h4>
            <div>
            <input type="text" onChange={e => {
                let comments = e.target.value;
                console.log(comments);
                dispatch({
                    type: 'ADD_COMMENTS',
                    payload: {
                        comments,
                    }
                });
            }} />
            <Button className={classes.root} onClick={e => {
                history.push('/5');
            }}>Next</Button>
            </div>
        </>
    );
}

export default Comments;