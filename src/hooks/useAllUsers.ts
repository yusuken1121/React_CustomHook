import { useState } from "react";
import { UserProps } from "../components/UserCard";
import { User } from "../types/UserTypes";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<UserProps>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async (): Promise<void> => {
    setLoading(true);
    setError(false);
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
  return { getUsers, users, loading, error };
};
