import express from 'express';
import { routes } from './routes';

class App {
  constructor() {
    this.server = express();

    this.start();
  }

  start() {
    this.middwares();
    this.routes();
  }

  middwares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export const app = new App();
