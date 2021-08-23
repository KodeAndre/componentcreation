import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
import styled from 'styled-components';
// eslint-disable-next-line
import TeamList from "./TeamList"
import TeamItem from "./TeamItem"

const TeamWrapper = styled.div`
  display: grid; 
  grid-auto-flow: column; 
  grid-auto-columns: 1fr; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr 0.1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Team TeamTitle"; 
  width: 100%; 
  height: 100%;
  background-color: #fafafa;
`

const Team = styled.div`
  grid-area: Team;
  display: grid;
  grid-auto-flow: row; 
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 0px 5px;
  justify-items: center;
`

const TeamTitle = styled.h2`
  justify-self: center; 
  align-self: center; 
  grid-area: TeamTitle;
  font-weight: 600;
  color: black;
`

export default function Cards(props) {

  return (
    <TeamWrapper>
      <Team>{TeamList.map(team => <TeamItem team = {team} key={team.id}/>)}</Team>
      <TeamTitle>TEAM</TeamTitle>
    </TeamWrapper>
  )
}