export interface Character {
  characterId: number,
  id: number,
  name: string,
  description: string,
  modified: string,
  thumbnail: {
    path: string,
    extension: string,
  },
  urls: [
    {
      type: string,
      url: string
    }
  ]
}
