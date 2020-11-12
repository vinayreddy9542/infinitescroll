import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Imageshow from './Imageshow'
import InfiniteScroll from 'react-infinite-scroll-component'
import './styles.css'

function Getimages(){
    const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 100) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "0iLglwuoBsY9XH7e4CyHewtruf8tyZY4rG-PjD3rlyE";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
          console.log(res)
        setImage([...images, ...res.data]);
      })
  }
        return(
            <div className="images">
                <InfiniteScroll
                    dataLength={images.length}
                    next={fetchImages}
                    hasMore={true}
                >
                
          {images.map(post => (
            <Imageshow name={post.user.name} url={post.urls.small} like={post.likes}/>
          ))}
        {/*
                {
                    this.state.posts.length?this.state.posts.map(post => 
                        <span key={post.id}>
                                <Imageshow name={post.user.name} url={post.urls.small} like={post.likes}/>
                        </span>
                    ):null
                }
            */}
                </InfiniteScroll>
            </div>
        )
}

export default Getimages