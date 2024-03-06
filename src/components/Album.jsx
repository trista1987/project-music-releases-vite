import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ albumData }) => {
  const artistNames = albumData.artists.map(artist => artist.name).join(', ');

  return (
    <div>
      <CoverImage coverImage={albumData.images[1].url} />
      <AlbumName
        albumName={albumData.name}
        albumLink={albumData.external_urls.spotify}
      />
      <ArtistName name={artistNames} external_url={albumData.artists[0].external_urls.spotify} />
    </div>
  );
};

//key = {albumData.images} for images?

//it map() the items array, artist and images need to be map in Album component. key?