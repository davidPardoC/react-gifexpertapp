import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { loading, data:images } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__zoomIn'>{category}</h3>
      {loading ? (
        <p className='animate__animated animate__flash'>loading...</p>
      ) : (
        <div className="card-grid animate__fadeIn">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};
