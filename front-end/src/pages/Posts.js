import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllposts } from '../actions/postActions'
import './post.css'

const Posts = (props) => {
    const posts = useSelector(state => state.postR.posts)
    const dispatch=useDispatch()
    const [post, setPost] = useState(null)
    const [filter, setFilter] = useState('')

console.log("posts===>",posts)
console.log("props.match.params.id===>",props.match.params.id)
useEffect(()=>{
  // posts && setPost(posts.filter(el=>el.id===props.match.params.id)[0])
  dispatch(getAllposts())
  // setPost(posts.find((el) => (el._id = props.match.params.id)));
},[dispatch]);
   console.log("posts===========>",posts)
  const  postFiltred = posts ?  posts.filter(el=>el.category===props.match.params.id)  : []
  const handleFilterChange=()=>{
    return postFiltred.filter(elm=>elm.title.toLowerCase().trim().includes(filter.toLowerCase().trim())||elm.description.toLowerCase().trim().includes(filter.toLowerCase().trim()))
  }
const handleSearch=(e)=>{
  setFilter(e.target.value)
}
    return (

        <div>
                  <br></br>
{ handleFilterChange() && <p>{handleFilterChange().length} Jobs was founded !</p>
}          <div class="cntr">
	<div class="cntr-innr">
  <p>job to search for </p>
	  <label class="search" for="inpt_search">
			<input   onChange={handleSearch}   id="inpt_search" type="text" />
		</label>
	</div>
</div>
        <br></br>            
        <br></br>
        {handleFilterChange() && handleFilterChange().map(el=><div>
        <div class="blog-card">
        <div class="meta">
      <div class="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}}></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
        <div class="description">
      <h1>{el.title}</h1>
      <br></br>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <h2>{el.city}</h2>
      <p> {el.description}</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
        </div>
        <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)'}}></div>
      <ul class="details">
        <li class="author"><a href="#">Jane Doe</a></li>
        <li class="date">July. 15, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </li>
      </ul>
    </div>
    
  </div>
        </div>) }
        


        
        </div>

    )
}
export default Posts
