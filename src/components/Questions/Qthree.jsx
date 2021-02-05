import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Qthree() {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <h1>How well are you being supported?</h1>
            <br />
            <h4>Support?</h4>
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
            <button onClick={e => {
                if (feedbackStore.support === '') {
                    alert('Please submit a value!')
                } else {
                    history.push('/4');
                }
            }}>Next</button>
        </>
    );
}

export default Qthree;