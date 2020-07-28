import styled from '@emotion/styled'
import React from 'react'

const StyledInputContainer = styled.div`
  display: flex;
  padding: 12px 0;

  & > input + button {
    margin-left: 6px;
  }

  & > input {
    flex: 1;
  }
`

interface Props {
  children: React.ReactNode;
}

export const InputContainer = ({children}: Props) => {
  return <StyledInputContainer>{children}</StyledInputContainer>
}
