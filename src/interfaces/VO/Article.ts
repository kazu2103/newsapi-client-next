import { ValueObject } from "./ValueObject";

interface ArticleProps {
  source: object,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string, 
}

export class Article extends ValueObject<ArticleProps> {
  static create(props: ArticleProps): Article {
    return new Article(props);
  }
}