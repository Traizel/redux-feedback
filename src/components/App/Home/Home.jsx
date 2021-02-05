import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    return (
        <div>
            <h1>Give yourself some Feedback!</h1>
            <button onClick={e => {
                history.push('/1');
            }}>Start!</button>
        </div>
    );
}

export default Home;