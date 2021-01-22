import { shipments } from '../../index';
import calcOptimalRoute from '../../util/calcOptimalRouteV1';

const getRoutes = async (_obj: {}, _args: {}, _context: {}) => {
  const routes = calcOptimalRoute(shipments);
  return { shipments, routes };
};

export default getRoutes;