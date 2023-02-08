import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';
export default function Header() {
  const { user, setUser } = useUser();

  const handleClick = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <header>
      <h2>Header</h2>
      {user && (
        <>
          <div>Hello {user.email}</div> <button onClick={handleClick}>Sign Out</button>
        </>
      )}
    </header>
  );
}
