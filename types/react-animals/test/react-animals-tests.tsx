import Animal from 'react-animals';

const MyComponent: React.FC = () => {
    const myColor = 'r' + 'e' + 'd';
    const myAnimal = 'wom' + 'bat';

    return (
        <div
            style={{
                borderRadius: '1rem',
                padding: '1rem',
                display: 'flex',
                backgroundColor: 'crimson',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'stretch',
            }}
        >
            <Animal name={myAnimal} color="none" size="2rem" square />
            <Animal color={myColor} size="2rem" square />
            <Animal name="badger" size="2rem" circle dance />
        </div>
    );
};

export default MyComponent;
