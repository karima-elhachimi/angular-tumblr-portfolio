export class TumblrConnections {
  private tumblrApiUrl = `https://api.tumblr.com/v2/blog/yvalgesto.tumblr.com/`;
  private apiKey = `MvpjntcaeX2Y00hgO3FD66OLyVgQru9DDbn5bIcfseKf1CWwSW`;
  private photoPosts = `posts/photo?filer=text&api_key=${this.apiKey}`;
  public getPhotoPostsUrl = this.tumblrApiUrl + this.photoPosts;

}
