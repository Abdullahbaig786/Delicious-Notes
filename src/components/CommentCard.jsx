// We are deconstructing the props object directly in the parentheses of the function
function CommentCard({ username, comment }) {
  return (
    <div className="TaskCard bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-medium mb-2">{username} commented this:</h3>
      <p className="text-sm">{comment}</p>
    </div>
  );
}

export default CommentCard;
