import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={0} color={TETROMINOS[0].color}></StyledCell>
)

export default Cell;
