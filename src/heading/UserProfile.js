/**
 * Render user profile information.
 * 
 * @param {Object} props - The user profile props.
 * @param {string} props.name - The name of the user.
 * @param {number} props.age - The age of the user.
 * @param {string} props.email - The email of the user.
 * @returns {JSX.Element} - The user profile component.
 * 
 * 
 */
export default function UserProfile(props) {
  return (
    <div className="user-profile">
      <h2>User profile</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}
