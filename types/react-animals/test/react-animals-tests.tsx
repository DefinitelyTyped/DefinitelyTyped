import Animal from 'react-animals';

const MyComponent: React.FC = () => (
    <div
        style={{
            borderRadius: '1rem',
            padding: '1rem',
        }}
    >
        <Animal name="badger" size={5} circle dance />
    </div>
);

export default MyComponent;
