import Orphanage from '../models/Orphanages';
import ImagesView from '../views/images_view';

export default {
  render(orphanage: Orphanage) {
    const {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    } = orphanage;
    return {
      id: id,
      name: name,
      latitude: latitude,
      longitude: longitude,
      about: about,
      instructions: instructions,
      opening_hours: opening_hours,
      open_on_weekends: open_on_weekends,
      images: ImagesView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
