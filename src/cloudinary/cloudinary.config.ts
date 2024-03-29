import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryConfig = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: 'dj0p7n9z9',
      api_key: '313223152385715',
      api_secret: "thgNhS7yc6wc0C6tPbrlz8GmFsA",
    });
  },
};
