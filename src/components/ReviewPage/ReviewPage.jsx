import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';

function Review({classes}) {

    const feedbackStore = useSelector(store => store.feedbackReducer);
    const history = useHistory();

    return (
        <>
            <h1>Review your Feedback!</h1>
            <br />
            <div>
            <h2>Feelings: {feedbackStore.feeling}</h2>
            <h2>Understanding: {feedbackStore.understanding}</h2>
            <h2>Support: {feedbackStore.support}</h2>
            <h2>Comments: {feedbackStore.comments}</h2>
            <Button className={classes.root} onClick={e => {
                axios.post('/feedback', { feedback: feedbackStore }).then(response => {
                    console.log('Retireved data successfully', response.data);
                    history.push('/6');
                }).catch(err => console.log('Error in POST', err));
            }}>Submit</Button>
            </div>
        </>
    );
}

export default Review;