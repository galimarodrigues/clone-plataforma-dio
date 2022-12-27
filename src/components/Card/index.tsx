// import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://user-images.githubusercontent.com/23708544/89828414-60129d80-db2f-11ea-94a6-d3a42ebe4194.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/117487712?v=4"/>
         <div>
          <h4>Gabriel Lima</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto de HTML, CSS e JavaScript </h4>
          <p>Projeto realizado no bootcamp de front end orange tech... <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }