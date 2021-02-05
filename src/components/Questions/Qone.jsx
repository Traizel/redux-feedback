import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Qone() {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
        <h1>How are you feeling today?</h1>
        <br />
        <h4>Feeling?</h4>
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
        <button onClick={e => {
            if (feedbackStore.feeling === '') {
                alert('Please submit a value!')
            } else {
                history.push('/2');
            }
        }}>Next</button>
        </>
    );
}

export default Qone;