export const mockExpense = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        id: 0,
        value: '150',
        description: 'blusinha',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.0016',
            low: '4.944',
            varBid: '0.032',
            pctChange: '0.64',
            bid: '4.9967',
            ask: '4.9977',
            timestamp: '1684505580',
            create_date: '2023-05-19 11:13:00',
          },
          USDT: {
            code: 'USD',
            codein: 'BRLT',
            name: 'Dólar Americano/Real Brasileiro Turismo',
            high: '5.02',
            low: '4.955',
            varBid: '0.03',
            pctChange: '0.6',
            bid: '4.87',
            ask: '5.17',
            timestamp: '1684503180',
            create_date: '2023-05-19 10:33:00',
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '3.7067',
            low: '3.6676',
            varBid: '0.0237',
            pctChange: '0.64',
            bid: '3.6978',
            ask: '3.7033',
            timestamp: '1684505588',
            create_date: '2023-05-19 11:13:08',
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '6.2228',
            low: '6.1539',
            varBid: '0.0463',
            pctChange: '0.75',
            bid: '6.1996',
            ask: '6.215',
            timestamp: '1684505596',
            create_date: '2023-05-19 11:13:16',
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0215',
            low: '0.0213',
            varBid: '0.0001',
            pctChange: '0.47',
            bid: '0.0215',
            ask: '0.0215',
            timestamp: '1684505595',
            create_date: '2023-05-19 11:13:15',
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '136490',
            low: '131754',
            varBid: '-1551',
            pctChange: '-1.14',
            bid: '134589',
            ask: '134589',
            timestamp: '1684505608',
            create_date: '2023-05-19 11:13:28',
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '463.17',
            low: '445.82',
            varBid: '-1.96',
            pctChange: '-0.43',
            bid: '457.36',
            ask: '457.84',
            timestamp: '1684505587',
            create_date: '2023-05-19 11:13:07',
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.3986',
            low: '5.3421',
            varBid: '0.0433',
            pctChange: '0.81',
            bid: '5.3868',
            ask: '5.3948',
            timestamp: '1684505608',
            create_date: '2023-05-19 11:13:28',
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03608',
            low: '0.03573',
            varBid: '0.0003',
            pctChange: '0.84',
            bid: '0.03604',
            ask: '0.03607',
            timestamp: '1684505606',
            create_date: '2023-05-19 11:13:26',
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.5452',
            low: '5.481',
            varBid: '0.0525',
            pctChange: '0.96',
            bid: '5.5341',
            ask: '5.5423',
            timestamp: '1684505601',
            create_date: '2023-05-19 11:13:21',
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.3298',
            low: '3.2871',
            varBid: '0.0364',
            pctChange: '1.11',
            bid: '3.3217',
            ask: '3.3267',
            timestamp: '1684505595',
            create_date: '2023-05-19 11:13:15',
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.713',
            low: '0.7034',
            varBid: '0.0055',
            pctChange: '0.78',
            bid: '0.7125',
            ask: '0.7125',
            timestamp: '1684505522',
            create_date: '2023-05-19 11:12:02',
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.3707',
            low: '1.3589',
            varBid: '0.0027',
            pctChange: '0.19',
            bid: '1.3684',
            ask: '1.3686',
            timestamp: '1684505585',
            create_date: '2023-05-19 11:13:05',
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '9102.61',
            low: '8859.25',
            varBid: '-20.85',
            pctChange: '-0.23',
            bid: '9062.69',
            ask: '9104.33',
            timestamp: '1684505598',
            create_date: '2023-05-19 11:13:18',
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.33',
            low: '2.25',
            varBid: '0',
            pctChange: '-0.15',
            bid: '2.32',
            ask: '2.33',
            timestamp: '1684505611',
            create_date: '2023-05-19 11:13:31',
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.37114',
            low: '0.35724',
            varBid: '-0.00171',
            pctChange: '-0.46',
            bid: '0.36679',
            ask: '0.36679',
            timestamp: '1684505562',
            create_date: '2023-05-19 11:12:42',
          },
        },
      },
    ],
    editor: false,
    idToEdit: 0,
  },
};
