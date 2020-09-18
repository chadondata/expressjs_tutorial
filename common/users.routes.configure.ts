import {CommonRoutesConfig, configureRoutes} from './common.routes.config';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }

    configureRoutes() {
        this.app.get('/users', (_req: express.Request, res: express.Response) => {
            res.status(200).send('List of users. Why doesn\'t the parameter one work?');
        });
        
        this.app.post('/users', (_req: express.Request, res: express.Response) => {
            res.status(200).send('Post to users');
        });
        
        this.app.put('/users/:userID', (_req: express.Request, res: express.Response) => {
            res.status(200).send('Put to ${req.params.userID}');
        });
        
        this.app.patch('/users/:userID', (_req: express.Request, res: express.Response) => {
            res.status(200).send('Patch to ${req.params.userID}');
        });
        
        this.app.delete('/users/:userID', (_req: express.Request, res: express.Response) => {
            res.status(200).send('Delete ${req.params.userID}');
        });
        
        this.app.get('/users/:userID', (_req: express.Request, res: express.Response) => {
            res.status(200).send('Get userid ${req.params.userID}');
        });
        
    }
}