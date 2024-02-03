import React,{useEffect} from 'react'
import { useState } from 'react';
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=>{
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  const update=async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=98c9fa9c82634c2f848992d9898e3774&page=${page}&pageSize=${props.pageSize}`;
    let data= await fetch(url);
    props.setProgress(30);
    let parsedData= await data.json();
    setLoading(false);
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };
  useEffect(()=>{
    document.title=`Daily News - ${captilaize(props.category)}`;
    update();
    //eslint-disable-next-line
  },[])
   const fetchMoreData=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=98c9fa9c82634c2f848992d9898e3774&page=${page+1}&pageSize=${props.pageSize}`;
      let data= await fetch(url);
      let parsedData= await data.json();
    setLoading(false);
    console.log(parsedData);
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setPage(page+1);
    }
    //  handleNext= async ()=>{
    //   if(!(page+1 > Math.ceil(totalResults/props.pageSize))){
    //     setState({
    //       loading:true,
    //       page: this.state.page+1
    //     })
    //     this.update();
    //   }
    // }
    // handlePrev= async ()=>{
    //   this.setState({
    //     loading:true,
    //     page: this.state.page-1
    //   })
    //   this.update();
    // }
    const captilaize=(word)=>{
      return word.charAt(0).toUpperCase()+word.slice(1);
    }
    return (
      <>
        <h1 style={{paddingTop:"70px"}} className='text-center my-3'>Daily News - Top {captilaize(props.category)} Headlines</h1>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
          <div className='container my-1'>
        <div className="row">
            {articles.map((elememt)=>{
                return <div className="col-md-4" key={elememt.url}>
                <Newsitem title={elememt.title??""} description={elememt.description??""} imgurl={elememt.urlToImage??"https://cdn.pixabay.com/photo/2013/02/19/02/24/football-83222_1280.jpg"} url={elememt.url} author={elememt.author??"Unknown"} source={elememt.source.name} date={elememt.publishedAt}/>
            </div>
            })}
        </div>
          </div>
        </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between my-3">
        <button disabled={this.state.page <= 1} onClick={this.handlePrev} className="btn btn-dark">&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
      </div> */}
      </>
    )
  }

export default News
