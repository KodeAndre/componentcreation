import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
import styled from 'styled-components';
// eslint-disable-next-line
import TeamList from "./TeamList"

const TeamImg = styled.img`
  grid-area: TeamImg;
  border-radius: 100%;
  width: 125px;
  height: 125px;
`
const TeamName = styled.h3`
  grid-area: TeamName;
  text-align: center;
  font-weight: 600;
  color: black;
`

export default function TeamItem(props) {
    const team = props.team
  return (
    <div>{
        <TeamImg src={team.image} alt={team.name} />}
        <TeamName>{team.name}</TeamName>
    </div>
  )
}