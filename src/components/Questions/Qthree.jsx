import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Qthree({classes}) {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <h1>How well are you being supported?</h1>
            <br />
            <h4>Support?</h4>
            <div>
            <input type="number" onChange={e => {
                let support = e.target.value;
                console.log(support);
                dispatch({
                    type: 'ADD_SUPPORT',
                    payload: {
                        support,
                    }
                });
            }} />
            <Button className={classes.root} onClick={e => {
                if (feedbackStore.support === '') {
                    alert('Please submit a value!')
                } else {
                    history.push('/4');
                }
            }}>Next</Button>
            </div>
        </>
    );
}

export default Qthree;