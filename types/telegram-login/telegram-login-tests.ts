const app = window.Telegram.Login;

app.auth({ bot_id: '123456789', }, (dataOrFalse) => { 
    return dataOrFalse;
});