export class PortfolioItem {
  portfolioItemId: number;
  imageUrls: string[];
  altTextFromTags: string;
  captionText: string;

  constructor(_portfolioItemId: number, _imageUrls: string[], _altTextFromTags: string, _captionText: string ){
    this.portfolioItemId = _portfolioItemId;
    this.imageUrls = _imageUrls;
    this.altTextFromTags = _altTextFromTags;
    this.captionText = _captionText;

  }
}
