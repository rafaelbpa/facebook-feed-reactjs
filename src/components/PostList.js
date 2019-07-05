import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://pbs.twimg.com/profile_images/1137917683268227078/E_TSX5IA_400x400.jpg'
        },
        date: '05 Jul 2019',
        content: `Fala galera beleza?
        
        Estou precisando de uma help aqui. Um amigo se mudou para Fortaleza (CE) e está querendo saber se alguém conhece algum lugar onde ele possa adotar um cachorro em Fortaleza. Alguém pode indicar um lugar?`,
        comments: [
          {
            id: 1,
            author: {
              name: 'Rafael Araújo',
              avatar: 'https://pbs.twimg.com/profile_images/938615717452115968/QczZlE1m_400x400.jpg'
            },
            content: "Faaaaala dev, ehhehe! Diego, eu sou daqui! Um abrigo que sempre tem animais lindinhos para adotar é o Abrigo São Lázaro! Peça pro seu amigo entrar em contato com eles!"
          }
        ],
      }, {
        id: 2,
        author: {
          name: 'Rafael Araújo',
          avatar: 'https://pbs.twimg.com/profile_images/938615717452115968/QczZlE1m_400x400.jpg'
        },
        date: '05 Jul 2019',
        content: 'Pessoal, alguém sabe que horas começa a final da Copa América 2019?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://pbs.twimg.com/profile_images/1137917683268227078/E_TSX5IA_400x400.jpg'
            },
            content: "Vai ser às 17h, no domingo!"
          }
        ],
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;