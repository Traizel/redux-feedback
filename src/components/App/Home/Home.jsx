import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Home({classes}) {

    const history = useHistory();
    console.log(classes);

    return (
        <div>
            <h1>Give yourself some Feedback!</h1>
            <Button className={classes.root} onClick={e => {
                history.push('/1');
            }}>Start!</Button>
        </div>
    );
}

export default Home;