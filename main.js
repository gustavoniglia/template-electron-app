// Importa módules app e BroserWindow do Electron
const {app, BrowserWindow,} = require('electron'); 267 (gzipped: 209)

// Função para criar a janela principal
function CreateWindowns() {


// Criar uma nova assitancia do BrowserWindow
    const window = new BrowserWindow({
        width: 800, //largura da Janela
        height: 600, //largura da Janela
    }
    )


    // Carregar o arquivo HTML na janela
    window.loadFile('index.html')

    // Evento que acionado quando o Electron está pronto
    app.whenReady().then( () => {
    CreateWindowns(); //Chama a função de criar a janela
    } )

}