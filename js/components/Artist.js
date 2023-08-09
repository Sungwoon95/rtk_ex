import React from 'react'
import { RandomArtist } from '../data'

export const Artist = () => {
  const onClick = (artist) => {
    // console.log(artist) 
    // 클릭 시 랜덤 아티스트 출력
  }

  const onRemove = (artist) => {
    // console.log(artist)
    // 클릭한 아티스트를 출력
  }

  const list = []
  const artists = list.map((item) =>
    <li key={item + Date.now()}>
      {item}
      <button onClick={() => onRemove(item)}>
        삭제
      </button>
    </li>)

  return (
    <div>
      <h2>아티스트</h2>
      <button onClick={() => onClick(RandomArtist())}>아티스트 추가</button>
      <ul>
        {artists}
      </ul>
    </div>
  )
}