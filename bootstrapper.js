import graphqlServer from './app';
import { PortfolioSchema } from './portfolioSchema.js';

var port = process.env.PORT || 8080;
graphqlServer(PortfolioSchema, port);