import ListViewRecentItem from 'src/components/ListViewRecentItem/ListViewRecentItem'

export const QUERY = gql`
  query UserFeedbackOfGroupQuery($userId: String!, $groupId: String!) {
    feedbackOfUserForGroup(userId: $userId, groupId: $groupId) {
      id
      createdAt
      name
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div className="text-gray-500">No feedback yet!</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ feedbackOfUserForGroup }) => {
  const sorted = feedbackOfUserForGroup
    ? feedbackOfUserForGroup
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
    : null
  return (
    <>
      {sorted ? (
        <ul>
          {sorted.map((feedback) => (
            <ListViewRecentItem
              key={feedback.id}
              name={feedback.name}
              value={feedback.value}
              createdAt={feedback.createdAt}
            />
          ))}
        </ul>
      ) : null}
    </>
  )
}
