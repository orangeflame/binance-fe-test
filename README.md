The small test that we would like you to do is to make your own market widget history UI on React using the REST API and WebSockets as follow picture shows.

<img src="./market.png">

Rest API: `https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products`

WebSocket API: `wss://stream.binance.com/stream?streams=!miniTicker@arr`

There should also be a button that, once clicked, force closes the WebSocket, so you have to develop a proper retry/reconnect/resubscribe logic.

You need to group the coins into serveral markets

You should spend around half a day on this exercise. You can use JS or TypeScript and add at least one unit test for a component.
