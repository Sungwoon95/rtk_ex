const artistData = ['뉴진스', '르세라핌', '아이브', '에스파', '아이들', '엔믹스', '스테이씨', '블랙핑크', '트와이스', '있지']
const albumData = ['NewJeans 2nd EP "Get Up"', 'Zero', 'NewJeans "OMG"', 'UNFORGIVEN', 'MY WORLD - The 3rd Mini Album', 'Savage - The 1st Mini Album']
const songData = ['Hype Boy', 'Attention', 'Cookie', 'Hurt', 'OMG', 'Ditto', 'Super Shy', 'Spicy', '도깨비불', 'Next Level']

export const RandomArtist = () => {
  return artistData[Math.floor(Math.random() * artistData.length)]
}

export const RandomAlbum = () => {
  return albumData[Math.floor(Math.random() * albumData.length)]
}

export const RandomSong = () => {
  return songData[Math.floor(Math.random() * songData.length)]
}