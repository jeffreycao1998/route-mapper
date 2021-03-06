import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getRoutes: MapData
  }

  type Mutation {
    createShipment(pickupLocation: [Float]!, dropoffLocation: [Float]!, description: String!): MapData
    deleteShipment(shipmentId: String!): MapData
    editShipment(pickupLocation: [Float]!, dropoffLocation: [Float]!, description: String!, shipmentId: String!): MapData
  }

  type Status {
    success: Boolean
  }

  type Shipment {
    id: String
    pickupLocation: [Float]
    dropoffLocation: [Float]
    description: String
  }

  type Route {
    id: String
    type: String
    sequence: Int
    geojsonCoordinates: [[Float]]
  }

  type MapData {
    shipments: [Shipment]
    routes: [Route]
  }
`;

export default typeDefs;