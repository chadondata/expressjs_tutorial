import express from 'express';
import * as http from 'http';

import {CommonRoutesConfig} from '../common/common.routes.config';
import {UsersRoutes} from '../common/users.routes.configure';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: any = [];
routes.push(new UsersRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('Server running on port ${port}');
});

server.listen(port, () => {
    console.log('Server running on port ${port}');
    routes.forEach((route: CommonRoutesConfig) => {
        console.log('Routes configured for ${route.getName()}');        
    });
});
