import React from 'react';
import { InputGroup } from '@blueprintjs/core';
import styled from 'styled-components';

type SearchInputComponentProps = {
  val: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const InputContainer = styled.div`
  width: 200px;
`;

function SearchInputComponent({ val, onChange, ...props }: SearchInputComponentProps) {
  return (
    <InputContainer>
      <InputGroup
        value={val}
        onChange={onChange}
        leftIcon="filter"
        placeholder="Filter..."
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </InputContainer>
  );
}

export default SearchInputComponent;
