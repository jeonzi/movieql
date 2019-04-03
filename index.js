import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running")); 
// 서버가 잘 작동하면 localhost:4000에 graphql playground가 뜬다 
// playground는 내 DB가 잘 작동하고 데이터가 잘 있는지 확인하고 테스트해주는 곳 

