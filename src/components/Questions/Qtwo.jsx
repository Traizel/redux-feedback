import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Qtwo({classes}) {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <br />
            <h4>Understanding?</h4>
            <div>
            <input type="number" onChange={e => {
                let understanding = e.target.value;
                console.log(understanding);
                dispatch({
                    type: 'ADD_UNDERSTANDING',
                    payload: {
                        understanding,
                    }
                });
            }} />
            <Button className={classes.root} onClick={e => {
                if (feedbackStore.understanding === '') {
                    alert('Please submit a value!')
                } else {
                    history.push('/3');
                }
            }}>Next</Button>
            </div>
        </>
    );
}

export default Qtwo;