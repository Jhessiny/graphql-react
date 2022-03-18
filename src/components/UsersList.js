import React, { useEffect, useState } from "react";
import { LOAD_USERS } from "../graphql/queries";
import { useQuery, gql } from "@apollo/client";

const UsersList = () => {
  const { error, loading, data } = useQuery(LOAD_USERS, {
    variables: { page: 1, count: 10 },
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) setUsers(data.getAllUsers);
  }, [data]);

  return (
    <div>
      {loading
        ? "loading..."
        : users.map((user, i) => (
            <div key={`user-${i}`}>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </div>
          ))}
    </div>
  );
};

export default UsersList;
