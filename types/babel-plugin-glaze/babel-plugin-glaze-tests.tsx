function CustomComponent() {
    return <p sx={{ color: 'green' }}>Hello, world!</p>;
}

function App() {
    return (
        <div sx={{ fontWeight: 'bold' }}>
            <CustomComponent />
        </div>
    );
}
