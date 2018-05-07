import React, { Component } from 'react'
import Link from './Link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {
  render() {
    const linksToRender = [
      {
        id: '1',
        description: 'Prisma turns your database into a GraphQL API 😎 😎',
        url: 'https://www.prismagraphql.com',
      },
      {
        id: '2',
        description: 'The best GraphQL client',
        url: 'https://www.apollographql.com/docs/react/',
      },
    ]

    return (
      <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
    )
  }
}

//export default LinkList

// GraphQL Query
const FEED_QUERY = gql`
query FeedQuery {
  feed {
    links {
      id
      createdAt
      description
      url
    }
  }
}`
// Use GraphQL container to wrap LinkList component with the FEED_QUERY
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (LinkList)