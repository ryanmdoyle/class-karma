import GroupCard from 'src/components/GroupCard/GroupCard'

export const QUERY = gql`
  query TeacherHomeQuery($userId: String!) {
    user(id: $userId) {
      id
      groups {
        id
        type
        name
        description
        enrollId
        ownerId
        enrollments {
          id
          user {
            id
            firstName
            lastName
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ user, userId }) => {
  if (!user || user.groups.length === 0) return <Empty />
  const primaryOwned = user?.groups.filter(
    (group) => group.type === 'primary' && group.ownerId === userId
  )
  const secondaryOwned = user?.groups.filter(
    (group) => group.type === 'secondary' && group.ownerId === userId
  )
  const primarySorted = primaryOwned.sort((a, b) => (b.name - a.name ? 1 : -1))
  const secondarySorted = secondaryOwned.sort((a, b) =>
    b.name - a.name ? 1 : -1
  )
  return (
    <div className="flex flex-col lg:flex-row">
      {primarySorted.length > 0 && (
        <div id="classes" className="w-100 lg:w-1/2 pr-2">
          <h1 className="text-2xl font-display mb-4">Classes</h1>
          {primarySorted.map((group) => (
            <GroupCard
              id={group.id}
              key={group.id}
              name={group.name}
              description={group.description}
              studentCount={group.enrollments.length}
              enrollId={group.enrollId}
              userId={userId}
            />
          ))}
        </div>
      )}
      {secondarySorted.length > 0 && (
        <div id="classes" className="w-100 lg:w-1/2 pr-2">
          <h1 className="text-2xl font-display mb-4">Classes</h1>
          {secondarySorted.map((group) => (
            <GroupCard
              id={group.id}
              key={group.id}
              name={group.name}
              description={group.description}
              studentCount={group.enrollments.length}
              enrollId={group.enrollId}
              userId={userId}
            />
          ))}
        </div>
      )}
    </div>
  )
}
