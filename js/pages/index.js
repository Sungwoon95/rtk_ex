import Head from 'next/head'
import Image from 'next/image'
import { Album } from '../components/Album'
import { Artist } from '../components/Artist'
import { Song } from '../components/Song'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <h1>
        RTK Example
      </h1>
      <Artist />
      <Album />
      <Song />
    </div>
  )
}
