import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Qone({classes}) {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
        <h1>How are you feeling today?</h1>
        <br />
        <h4>Feeling?</h4>
        <div>
        <input type="number" onChange={e => {
                let feeling = e.target.value;
                console.log(feeling);
                dispatch({
                    type: 'ADD_FEELING',
                    payload: {
                        feeling,
                    }
                });
        }}/>
        <Button className={classes.root} onClick={e => {
            if (feedbackStore.feeling === '') {
                alert('Please submit a value!')
            } else {
                history.push('/2');
            }
        }}>Next</Button>
        </div>
        </>
    );
}

export default Qone;