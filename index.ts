const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Ships {
    name: String
    home_port: String
    image: String
  }

  type Core {
    reuse_count: Int
    status: String
  }

  type Cores {
    flight: Int
    core: Core
  }

  type FirstStage {
    cores: [Cores]
  }

  type Rocket {
    rocket_name: String
    first_stage: FirstStage
  }

  type Links {
    article_link: String
    video_link: String
  }

  type LaunchSite {
    site_name_long: String
  }

  type LaunchesPast {
    mission_name: String
    launch_date_local: String
    ships: [Ships]
    rocket: Rocket
    links: Links
    launch_site: LaunchSite
  }

  type AutogeneratedMainType {
    launchesPast: [LaunchesPast]
  }

  type Query {
    launchesPast: [LaunchesPast]
  }
`;

const data = require('./spacex.json');
const launchesPasts = data;

const resolvers = {
    Query: {
      launchesPast: () => launchesPasts,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log(launchesPasts);
});