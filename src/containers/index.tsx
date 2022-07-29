import React, { useState, useEffect, useMemo } from 'react';

import { Switch } from '@blueprintjs/core';
import styled from 'styled-components';

import SearchInput from '../components/SearchInput';
import Table from '../components/Table';

import { useAppDispatch, useAppSelector } from '../hooks';
import { setUserActionsList } from '../redux/actions';

import userActions from '../__mocks__';
import { UserActions } from '../types';

const AppContainer = styled.div`
  padding: 20px;
  max-width: 100vw;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  margin-bottom: 10px;
`;

function App() {
  const dispatch = useAppDispatch();
  const useSelector = useAppSelector;

  const [searchQuery, setSearchQuery] = useState('');
  const [beautifyDate, setBeautifyDate] = useState(false);
  const [data, setData] = useState([]);

  const dataRetrieved: UserActions[] = useSelector((state) => state.userActionsReducer.userActions);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  // eslint-disable-next-line max-len
  const filterData = (unfilteredData: UserActions[], substring: string) => unfilteredData.filter((el) => {
    const items = Object.values(el);
    const filteredRow = items.filter((e) => e.includes(substring));
    if (filteredRow.length > 0) {
      return true;
    }
    return false;
  });

  // why do I need Redux?
  useEffect(() => {
    dispatch(setUserActionsList(userActions));
  }, [dispatch]);

  useEffect(() => setData(dataRetrieved), [dataRetrieved]);

  useEffect(() => {
    const filtered = filterData(dataRetrieved, searchQuery);
    setData(filtered);
  }, [dataRetrieved, searchQuery]);

  return (
    <AppContainer>
      <ControlsContainer>
        <SearchInput val={searchQuery} onChange={onInputChange} />
        <Switch checked={beautifyDate} label="Beautify💅Date " onChange={() => setBeautifyDate(!beautifyDate)} />
      </ControlsContainer>
      <Table userActions={data} beautifyDate={beautifyDate} />
    </AppContainer>
  );
}

export default App;
