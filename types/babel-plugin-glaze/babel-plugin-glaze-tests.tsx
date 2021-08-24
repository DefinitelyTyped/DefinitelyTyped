function CustomComponent() {
    return <p sx={{ color: 'green' }}>Hello, world!</p>;
}

function App() {
    return <CustomComponent sx={{ fontWeight: 'bold' }} />;
}
