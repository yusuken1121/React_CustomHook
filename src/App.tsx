import { useState } from "react";
import "./App.css";

import { UserCard, UserProps } from "./components/UserCard";
import { User } from "./types/UserTypes";

function App() {
  const [users, setUsers] = useState<Array<UserProps>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchData = async (): Promise<void> => {
    try {
      const res: Response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!res.ok) {
        throw new Error("HTTP error!");
      }
      const data: User[] = await res.json();
      const userData = data.map((user: User) => {
        return {
          id: user.id,
          user: `${user.name} ${user.username}`,
          mail: user.email,
          address: `${user.address.city} ${user.address.street} ${user.address.zipcode}`,
        };
      });
      setUsers(userData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
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
