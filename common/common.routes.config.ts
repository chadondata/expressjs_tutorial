import express from 'express';

export class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
    }

    get_name() {
        return this.name;
    }
}

export interface configureRoutes {
    
}

