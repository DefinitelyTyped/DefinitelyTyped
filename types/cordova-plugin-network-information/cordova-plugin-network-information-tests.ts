var connType = navigator.connection.type;
if (connType == Connection.WIFI) {
    console.log('Congratulations, you\'re with fast Internet!');
}

document.addEventListener('offline', () => { alert('You\'re offline!'); });
