(async function () {
  const seriesData = await fetchSeriesData()
    console.log('seriesData: ', seriesData)
    subcribe(data => { // data: [time, open, high, low, close]
      console.log('suncribe: ', data)
    })

  // [time, open, high, low, close][]
  function fetchSeriesData() {
    return new Promise((resolve, reject) => {
      fetch('https://www.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m')
        .then(async res => {
          const data = await res.json()
          const result = data.map(([time, open, high, low, close]) => [time, open, high, low, close])
          resolve(result)
        })
        .catch(e => reject(e))
    })
  }
  function subcribe(success) {
    try {
      const socket = new WebSocket('wss://stream.binance.com/stream?streams=btcusdt@kline_1m')
      socket.onmessage = e => {
        const res = JSON.parse(e.data)
        const { t, o, h, l, c } = res.data.k
        success([t, o, h, l, c]);
      }
    } catch(e) {
      console.error(e.message)
    }
  }
})()