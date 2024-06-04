import "./App.css";
import { useAllUsers } from "./hooks/useAllUsers";
import { UserCard } from "./components/UserCard";

function App() {
  const { getUsers, users, loading, error } = useAllUsers();
  const onClickFetchData = () => getUsers();
  return (
    <div>
      <button
        onClick={() => onClickFetchData()}
        className="border-blue-800 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 shadow-lg "
      >
        Fetch the data
      </button>
      {error ? (
        <p className="text-red-600 text-3xl">failed fetching data</p>
      ) : loading ? (
        <p>Now loading</p>
      ) : (
        <div>
          {users.map((user) => {
            return (
              <UserCard
                key={user.id}
                id={user.id}
                user={user.user}
                mail={user.mail}
                address={user.address}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
