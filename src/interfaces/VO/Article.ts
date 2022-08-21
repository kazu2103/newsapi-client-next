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

  get source(): object {
    return this._value.source;
  }
  get author(): string {
    return this._value.author;
  }
  get title(): string {
    return this._value.title;
  }
  get description(): string {
    return this._value.description;
  }
  get url(): string {
    return this._value.url;
  }
  get urlToImage(): string {
    return this._value.urlToImage;
  }
  get publishedAt(): string {
    return this._value.publishedAt;
  }
  get content(): string {
    return this._value.content;
  }
}