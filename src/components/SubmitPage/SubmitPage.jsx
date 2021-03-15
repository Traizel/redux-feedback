import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Submit({classes}) {

    const history = useHistory();

    return (
        <div>
            <h1>Thanks for your Feedback!</h1>
            <Button className={classes.root} onClick={e => {
                history.push('/');
            }}>Submit another!</Button>
        </div>
    );
}

export default Submit;