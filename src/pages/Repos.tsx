import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export interface IRepository {
  name: string,
  description: string
}

function Repos() {

  const { data: repo, isFetching } = useQuery<IRepository[]>(["repos"], async () => {
    const response = await axios.get("https://api.github.com/users/jcspader/repos")
    return response.data;
  }, {
    staleTime: 1000 * 30
  });

  /*
  const [repo, setRepo] = useState<IRepository[]>([]);
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    axios.get("https://api.github.com/users/jcspader/repos")
      .then(response => setRepo(response.data))
      .finally(() => setIsFetching(false));
  }, [])
  */

  if (isFetching)
    return <strong>Loading...</strong>

  return (
    <ul>
      {repo && repo.map(item =>
        <li>
          <Link to={`repos/${item.name}`}>{item.name}</Link>
          <p>{item.description}</p>
        </li>
      )}
    </ul>
  );
}

export default Repos;
