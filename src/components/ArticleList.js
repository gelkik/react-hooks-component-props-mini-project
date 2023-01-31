import Article from './Article';

function ArticleList({ post }){
    const article = post.map(a=>{
        return <Article key = {a.title} 
            title = {a.title} 
            date={a.date} 
            preview = {a.preview}/>;

    })
    return (
        <main>
            {article}
        </main>
    )
}

export default ArticleList;