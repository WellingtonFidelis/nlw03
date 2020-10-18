import Image from '../models/Images';

export default {
  render(image: Image) {
    const { id, path } = image;

    return {
      id: id,
      url: `http://192.168.43.9:3333/uploads/${path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
