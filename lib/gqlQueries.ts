import { addresses } from "utils/constants"

export const tokensQueryProject = (
  projectId: number | string
) => /* GraphQL */ `
project(
  id: "2-${projectId}"
) {
  owner
  createdAt
  metadataUri
  configureEvents {
    timestamp
    duration
    weight
    dataSource
  }
}
`

export const tokensQueryProjects = /* GraphQL */ `
projects(
  where: {
    deployer: "${addresses.BluntDelegateProjectDeployer.toLowerCase()}"
  },
  orderBy: "createdAt", 
  orderDirection: "desc"
) {
  projectId
  owner
  createdAt
  metadataUri
  configureEvents {
    timestamp
    duration
    weight
    dataSource
  }
}
`
