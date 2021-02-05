import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Qtwo() {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <br />
            <h4>Understanding?</h4>
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
            <button onClick={e => {
                if (feedbackStore.understanding === '') {
                    alert('Please submit a value!')
                } else {
                    history.push('/3');
                }
            }}>Next</button>
        </>
    );
}

export default Qtwo;