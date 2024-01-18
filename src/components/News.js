import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
export class News extends Component {
  articles=[];
    constructor(props){
        super(props);
        this.state={
            articles:this.articles,
            loading:false,
            page:1
          }
          document.title=`Daily News - ${this.captilaize(props.category)}`
    }
    async update(){
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=51a2d40db76e4f72b9096976ef8cf041&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        loading:false,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
      })
    }
    async componentDidMount(){
      this.update();
    }
     handleNext= async ()=>{
      if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        this.setState({
          loading:true,
          page: this.state.page+1
        })
        this.update();
      }
    }
    handlePrev= async ()=>{
      this.setState({
        loading:true,
        page: this.state.page-1
      })
      this.update();
    }
    captilaize=(word)=>{
      return word.charAt(0).toUpperCase()+word.slice(1);
    }
    render() {
    return (
      <>
      <div className='container my-5'>
        <h1 className='text-center my-3'>Daily News - Top {this.captilaize(this.props.category)} Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
            {!this.state.loading&&this.state.articles.map((elememt)=>{
                return <div className="col-md-4" key={elememt.url}>
                <Newsitem title={elememt.title??""} description={elememt.description??""} imgurl={elememt.urlToImage??"https://i.ytimg.com/vi/bSWs9pS3VXY/maxresdefault.jpg"} url={elememt.url} author={elememt.author??"Unknown"} source={elememt.source.name} date={elememt.publishedAt}/>
            </div>
            })}
        </div>
      </div>
      <div className="container d-flex justify-content-between my-3">
        <button disabled={this.state.page <= 1} onClick={this.handlePrev} className="btn btn-dark">&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
      </div>
      </>
    )
  }
}

export default News
