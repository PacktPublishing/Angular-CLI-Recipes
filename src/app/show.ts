export class Show {
  id: number;
  name: string;
  premiered: string;
  officialSite: string;
  image: ShowImage;
  network: ShowNetwork;
  rating: ShowRating;
}

class ShowImage {
  medium: string;
}

class ShowNetwork {
  name: string;
}

class ShowRating {
  average: string;
}
