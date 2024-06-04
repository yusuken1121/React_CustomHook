import { FC } from "react";
export type UserProps = {
  id: number;
  user: string;
  mail: string;
  address: string;
};

export const UserCard: FC<UserProps> = (props) => {
  const { user, mail, address } = props;
  return (
    <div className="border-gray-400 border-2 mt-2 p-2 flex flex-grid grid-cols-3 gap-3 bg-gray-300 shadow-lg bordered hover:translate-y-1">
      <div className="user-card-item">
        <dt>Name</dt>
        <dd>{user}</dd>
      </div>
      <div className="user-card-item">
        <dt>Mail</dt>
        <dd>{mail}</dd>
      </div>
      <div className="user-card-item">
        <dt>Address</dt>
        <dd>{address}</dd>
      </div>
    </div>
  );
};
