import React from 'react'
import styles from '../../styles/Home.module.css'
import { Post, PostJsonResponse } from '../../models/Post'
import { useRouter } from "next/router";

function Posts({ data }:PostJsonResponse) {
  console.log(data)
const router =useRouter();
  const clickHandler = (id: number)=> router.push(`/posts/${id}`)
    return (
        <div className={styles.grid}>
        {data.map((post) => (
          <div key={post.id} onClick={()=> clickHandler(post.id)} className={styles.card}>
            <h5 className="">{post.Title}</h5>
            <p>{post.Excerpt}</p>
          </div>
        ))}
      </div>
    )
}

export default Posts
