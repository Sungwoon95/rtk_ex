import React from 'react'
import { RandomSong } from '../data'

export const Song = () => {
  const onClick = (song) => {
    // console.log(song) 
    // 클릭 시 랜덤 노래 출력
  }

  const onRemove = (song) => {
    // console.log(song) 
    // 클릭한 노래를 출력
  }

  const list = []
  const songs = list.map((item) =>
    <li key={item + Date.now()}>
      {item}
      <button onClick={() => onRemove(item)}>
        삭제
      </button>
    </li>)

  return (
    <div>
      <h2>노래</h2>
      <button onClick={() => onClick(RandomSong())}> 노래 추가</button>
      <ul>
        {songs}
      </ul>
    </div>
  )
}