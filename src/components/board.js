import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_BOARDS = gql`
  {
    myBoards {
      name
      desc
      id
      response {
        message
      }
    }
  }
`;

const Board = () => {
  const { loading, error, data } = useQuery(GET_BOARDS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log('message', data.myBoards[0].response.message);
  return (
    <ul>
      {data.myBoards.map(board => (
        <li key={board.id}>
          <p>{board.name}</p>
          <p>{board.desc}</p>
          <p>{board.id}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default Board;
