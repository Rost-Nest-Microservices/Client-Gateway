## CLIENT GATEWAY
This gateway is the communication point between our clients and services. Is the one in charge to receive the qrequests, and to send them to the corresponding services and to get back a response to the client.


## Dev
1. Clone repo
2. Install dependencies
3. Create `.env` file based on `.env.template`
4. Start the microservices to be consumed
5. Star the client-gateway with `npm run start:dev`

## Nats
```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```
