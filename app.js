import graphqlServer from './server2';
import { PortfolioSchema } from './portfolioSchema.js';

var port = process.env.PORT || 8080;
graphqlServer(PortfolioSchema, port);