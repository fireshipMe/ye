import React from 'react';
import { Column, Table2, Cell } from '@blueprintjs/table';
import styled from 'styled-components';
import { UserActions } from '../../types';

type TableContainerProps = {
  userActions: UserActions[],
  beautifyDate: boolean,
};

const TableContainerLayout = styled.div`
  height: 80vh;
`;

function TableContainer({ userActions, beautifyDate }: TableContainerProps) {
  const actionRenderer = (rowIndex: number) => <Cell>{userActions[rowIndex].action}</Cell>;

  const usernameRenderer = (rowIndex: number) => <Cell>{userActions[rowIndex].username}</Cell>;

  const plainDateRenderer = (rowIndex: number) => (
    <Cell>{userActions[rowIndex].action_createad_at}</Cell>
  );

  const dateRenderer = (rowIndex: number) => (
    (
      <Cell>
        {new Date(userActions[rowIndex].action_createad_at).toLocaleDateString()}
      </Cell>
    )

  );

  return (
    <TableContainerLayout>
      <Table2 numRows={userActions.length}>
        <Column cellRenderer={usernameRenderer} name="Username" />
        <Column cellRenderer={actionRenderer} name="Action" />
        <Column cellRenderer={beautifyDate ? dateRenderer : plainDateRenderer} name="Date" />
      </Table2>
    </TableContainerLayout>
  );
}

export default TableContainer;
