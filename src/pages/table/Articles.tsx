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

export class Articles extends React.Component {

  handleChange(event: any) {
    this.setState({value: event.target.value})
  }
  
  preventDefault(event: React.MouseEvent) {
    event.preventDefault();
  }
  
  controller = new ArticleController();

  handleSubmit(event: any) {
    const [keyword, setKeyword] = useState('')
    const [articles, setArticles] = useState<Article[]>([])

    this.controller.listArticle({
      apiKey: '',
      q: event.target.value
    }).then((data) => {
      setArticles(data.articles)
    }).catch((err) => {
      throw Error("http error: " + err)
    })
    
    return (
      <React.Fragment>
        <Title>Recent Orders</Title>
        <TextField value={keyword} onChange={(word) => setKeyword(word.target.value)}></TextField>
        <Button onSubmit={this.handleSubmit}>Submit</Button>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.title}>
                <TableCell>{article.content}</TableCell>
                <TableCell>{article.description}</TableCell>
                <TableCell>{article.url}</TableCell>
                <TableCell>{article.publishedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={this.preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
      </React.Fragment>
    );
  }

}
