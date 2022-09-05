import { Router } from "express";

const routes = new Router();

routes.get("/", function (req, res) {
  return res.json({ ok: true });
});

export { routes };
