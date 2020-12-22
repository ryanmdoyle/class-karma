import RecentUserFeedbackCell from 'src/components/cells/RecentUserFeedbackCell/RecentUserFeedbackCell'

const RecentFeedbackListCard = ({ userId, firstName }) => {
  return (
    <div className="white-box mb-4 max-h-96 overflow-scroll">
      <h2 className="font-display text-lg mb-2">
        Recent Feedback for {firstName}
      </h2>
      <RecentUserFeedbackCell userId={userId} />
    </div>
  )
}

export default RecentFeedbackListCard
