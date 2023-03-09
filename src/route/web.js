import { Express } from "express";

let router = Express.router;

let initWebRoutes = (app) => {
  router.get("/"),
    (req, res) => {
      return res.send("oke");
    };
};
