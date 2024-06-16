import React from 'react'
import "./Blog.css"
import { blog_con } from '../utils/data'

const Blog = () => {
  return (

    <div className='blog-con'>
    <div className='leftblog'>
        <div className='user'>
            <span class="material-symbols-outlined">person_3</span>
            <span>New users</span>
            <div className='but'>see all</div>
        </div>
        <div className='huxb'>
            <img src='' alt='' />
            <div className='text'>
                <span>hubx</span>
                <p>24 min</p>
            </div>
        </div>
    </div>

    <div className='mid'>
        <div className='heading'>
            <span class="material-symbols-outlined">add_diamond</span>
            <span>How to sell courses blog</span>
            <div className='but'>see all</div>
        </div>
        <ul className='blogs_items'>
            {blog_con.map((item) => (
                <li>
                    <p className='det'>{item.details}</p>
                    <span>{item.day}</span>
                </li>
            ))}
        </ul>  
    </div>

    <div className='rightblog'>
        <div className='eventLog'>
            <span class="material-symbols-outlined">stacked_line_chart</span>
            <span>Events Log</span>
            <div className='but'>see all</div>
        </div>
        <div className='loggedIn'>
            <span>hubx</span>
            <span>Logging In</span>
            <span>More Info</span>
        </div>
    </div>

    </div>
   




  )
}

export default Blog