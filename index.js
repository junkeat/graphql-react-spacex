var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a = require('apollo-server'), ApolloServer = _a.ApolloServer, gql = _a.gql;
var typeDefs = gql(__makeTemplateObject(["\n  type Ships {\n    name: String\n    home_port: String\n    image: String\n  }\n\n  type Core {\n    reuse_count: Int\n    status: String\n  }\n\n  type Cores {\n    flight: Int\n    core: Core\n  }\n\n  type FirstStage {\n    cores: [Cores]\n  }\n\n  type Rocket {\n    rocket_name: String\n    first_stage: FirstStage\n  }\n\n  type Links {\n    article_link: String\n    video_link: String\n  }\n\n  type LaunchSite {\n    site_name_long: String\n  }\n\n  type LaunchesPast {\n    mission_name: String\n    launch_date_local: String\n    ships: [Ships]\n    rocket: Rocket\n    links: Links\n    launch_site: LaunchSite\n  }\n\n  type AutogeneratedMainType {\n    launchesPast: [LaunchesPast]\n  }\n\n  type Query {\n    launchesPast: [LaunchesPast]\n  }\n"], ["\n  type Ships {\n    name: String\n    home_port: String\n    image: String\n  }\n\n  type Core {\n    reuse_count: Int\n    status: String\n  }\n\n  type Cores {\n    flight: Int\n    core: Core\n  }\n\n  type FirstStage {\n    cores: [Cores]\n  }\n\n  type Rocket {\n    rocket_name: String\n    first_stage: FirstStage\n  }\n\n  type Links {\n    article_link: String\n    video_link: String\n  }\n\n  type LaunchSite {\n    site_name_long: String\n  }\n\n  type LaunchesPast {\n    mission_name: String\n    launch_date_local: String\n    ships: [Ships]\n    rocket: Rocket\n    links: Links\n    launch_site: LaunchSite\n  }\n\n  type AutogeneratedMainType {\n    launchesPast: [LaunchesPast]\n  }\n\n  type Query {\n    launchesPast: [LaunchesPast]\n  }\n"]));
var data = require('./spacex.json');
var launchesPasts = data;
var resolvers = {
    Query: {
        launchesPast: function () { return launchesPasts; }
    }
};
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
// The `listen` method launches a web server.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
    console.log(launchesPasts);
});
