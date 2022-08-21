/* eslint-disable react-hooks/rules-of-hooks */
import React,  { useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Article } from '../../interfaces/VO/Article';
import { Button, TextField } from '@mui/material';
import { ArticleController } from '../../controllers/ArticleController';

const controller = new ArticleController();

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}



const Articles = (event: any) => {

  const [keyword, setKeyword] = useState('')
  const [articles, setArticles] = useState<Article[]>([])

  function handleClick(event: any) {
    console.log("submit")
    console.log(keyword)

    controller.listArticle({
      apiKey: 'aa',
      q: keyword
    }).then((data) => {
      console.log(data)
      setArticles(data.articles)
    }).catch((err) => {
      console.log(err)
      throw Error("http error: " + err)
    })
  }
  
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <TextField
        variant='standard'
        value={keyword}
        onChange={(word) => setKeyword(word.target.value)}
        InputProps={{endAdornment: <Button onClick={handleClick}>Submit</Button>}}
      ></TextField>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Published</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.title}>
              <TableCell>{article.title}</TableCell>
              <TableCell>{article.content}</TableCell>
              <TableCell>{article.description}</TableCell>
              <TableCell>{article.url}</TableCell>
              <TableCell>{article.publishedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}

export default Articles;