# TrybeWallet

Carteira online que computa gastos em diferentes moedas e converta tudo para uma única moeda, que pode ser escolhida por quem usa. As informações sobre nomes, cotações e outros dados sobre as moedas, vieram de uma API de Cotações de Moedas. Tudo isso usando o Redux para compartilhar o estado da aplicação entre seus vários componentes.

## Tecnologias Utilizadas

- JavaScript
- Node.js
- NPM
- React
- Redux
- Testing Library

## Estrutura do Projeto

O projeto tem a seguinte estrutura de diretórios e arquivos:

    src/
    App.js
    components/
      Header.jsx
      Table.jsx
      WalletForm.jsx
    index.css
    index.js
    pages/
      Login.js
      Wallet.js
    redux/
      actions/
        index.js
      reducers/
        index.js
        user.js
        wallet.js
      store.js
    setupTests.js
    service/
      fetchAPI.js
    serviceWorker.js
    tests/
      helpers/
        mockData.js
        mockExpense.js
        renderWith.js
      Login.test.js
      Wallet.test.js

## API

Este projeto utiliza a [API de Cotações](https://docs.awesomeapi.com.br/api-de-moedas).

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor com `npm start`
4. Acesse a aplicação em `http://localhost:3000`

## Contribuidores

Este projeto é para fins educacionais, portanto, pull requests não serão aceitos.

## Licença

MIT
