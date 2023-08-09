import React from 'react'
import { RandomAlbum } from '../data'

export const Album = () => {
  const onClick = (album) => {
    // console.log(album) 
    // 클릭 시 랜덤 앨범 출력
  }

  const onRemove = (album) => {
    // console.log(album)
    // 클릭한 앨범을 출력
  }

  const list = []
  const albums = list.map((item) =>
    <li key={item + Date.now()}>
      {item}
      <button onClick={() => onRemove(item)}>
        삭제
      </button>
    </li>)
  return (
    <div>
      <h2>앨범</h2>
      <button onClick={() => onClick(RandomAlbum())}> 앨범 추가</button>
      <ul>
        {albums}
      </ul>
    </div>
  )
}

