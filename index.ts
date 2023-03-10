import express, { Express, Request, Response } from 'express';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';

const app: Express = express();
const port = 3001;

dotenv.config();

app.use(bodyparser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/failure', (req: Request, res: Response) => {
    console.log("POST failure request:");
    res.send(
        `Received message: ${JSON.stringify(req.body)}`
    );
  });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
